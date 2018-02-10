---
title: How not to do form validation, or breaking QPay's ticketing system
layout: post
---

QPay, a company that does ticketing, memberships and merchandising for university societies has recently managed to convince various Cambridge societies to use their platform for ticketing. For example, several College Balls such as [Churchill's Spring Ball](https://churchillspringball.getqpay.com), [Hughes Hall's May Ball](https://hughesball-event.getqpay.com/), [Trinity Hall's (canceled) June Event](https://thje.getqpay.com), [Christ's May Ball](https://christsmayball2018.getqpay.com), [Newnham Summer Soirée](https://newnhamsummersoiree-event.getqpay.com/), [Pembroke's June Event](https://pembrokejuneevent2018.getqpay.com), [Sidney Sussex's June Event](https://sidneysussexjune-event.getqpay.com), [Darwin & St. Edmund's May Ball](https://darwinstedmundsmayball-event.getqpay.com/) and [Wolfson's May Ball](https://wolfsoncollegemaybal.getqpay.com) are all using QPay for ticketing this year.

These events rely on various mechanisms to check eligibility for various ticket types such as college student, university student, alumni and other special ticket types. These include email address checks and ticket passwords to buy various tickets. And they all fail in spectacular ways, relating to the title of this post, and that is all form validation is done **client side**, and none on the server side!

## Validation done client-side

### Email Addresses

I have to preface this with another flaw, which is even if email address validation is done server-side, QPay uses your phone number as your account, which means there is no need to put your own email address and you can impersonate other people. 

QPay has implemented three ways (that I've seen) of checking if an email address is on an approved list. Since validation is done client-side, this only serves to provide a hint to the user that the email address entered is not on the approved list.

The typical implementation is that the society maintains a list of email addresses on their management interface, and the browser fires off a request to validate if the email address is on the members list. There is nothing wrong with this, other than the fact this is not enforced on the server. (`/ajax_check_payer_email.php` and `/ajax_check_membership.php`)

The other implementation is to take the list of email addresses, and then **embed** the entire list into the page (implemented by the `custom_validate` function on the `/tickets` page). This leaks email addresses of whoever is "allowed" to buy tickets, be it college students or alumni or college staff. Colleges known to be affected by this are:

* Christ's College, list of all college students
* Sidney Sussex College, list of approved alumni 
* Newnham College, list of all college students
* Trinity Hall, list of all college students

A newer implementation that I just saw implemented (on the Pembroke June Event page) was the landing page (https://pembrokejuneevent2018.getqpay.com) has the following flow:

1. Enter email address
2. Send request to `sendaccessemail.php` with email address. If email is on member list, send email with an access code, **and return said access code in the same request for the client to validate locally**
3. Enter access code, if matches code returned by `sendaccessmail.php`, redirect to https://pembrokejuneevent2018-event.getqpay.com/start

Or, you could just skip all of that and go straight to https://pembrokejuneevent2018-event.getqpay.com/start.

### Ticket Passwords

Some events have passwords on certain ticket types. Passwords are embedded in plain text on the page. Simply copy password from page source, or remove validation code.

Known affected events are:

* Churchill Spring Ball, discounted and committee tickets
* Christ's May Ball, alumni and staff tickets
* Wolfson May Ball, college member early bird tickets
* Trinity Hall June Event, VIP and alumni tickets
* Sidney Sussex June Event, college member and alumni tickets

Example using a script I wrote to display ticket info:

![Trinity Hall June Event Password](/assets/imgs/tithall_juneevent_passwords.png)

### XSS attacks

Input is not sanitized, XSS attacks are possible. Potentially possible to gain access to society portals by stealing cookies.

![Churchill Spring Ball XSS demonstration](/assets/imgs/qpay_xss.png)

### Permanently reserving tickets

If event has limited number of tickets, it is possible to permanently reserve any number of tickets by changing the `ticketholdingtime` parameter and adding as many elements to the `tickets[]` array.

## Event ID Enumeration

Event ids are sequentially numbered. It is possible to enumerate through all ~3100 events as of the writing of this post and discover all of QPay's events, even though QPay seems to treat the event URLs as a form of access control.