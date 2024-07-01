import {Badge} from "@/components/ui/badge"
import Link from "next/link"

import PalworldScreenshot from "../assets/palworld.webp"
import PalserversScreenshot from "../assets/palservers.webp"
import SquadReadyScreenshot from "../assets/squad-ready.webp"
import ChatLogScreenshot from "../assets/chat-log.webp"
import FFBENewsScreenshot from "../assets/ffbe-news.webp"
import TShockScreenshot from "../assets/tshock.webp"
import {JSX, SVGProps} from "react"

export function Portfolio() {
  return (
    <>
      <header className="bg-gray-900 text-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl">Jun Siang Cheah</h1>
            <h2 className="text-2xl font-medium mb-6 md:text-3xl lg:text-4xl">Software Engineer</h2>
            <p className="text-lg mb-8 md:text-xl lg:text-2xl">
              Passionate about building innovative software solutions that solve real-world problems.
            </p>
          </div>
        </div>
      </header>
      <main className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl text-center">What Do I Do?</h2>
            <div className="text-center">
              <p>I do lots of backend things - with lots of experience with cloud-native infrastructure and
                DevSecOps.</p>
              <p>Tech stacks that I'm familiar with include:
                <ul>
                  <li>Go</li>
                  <li>Python</li>
                  <li>Kubernetes</li>
                  <li>Terraform</li>
                  <li>Vault</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl text-center">Public Projects</h2>
            <div className="flex flex-wrap -mx-4 justify-center">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                  <img
                    alt="Palworld screenshot"
                    className="w-full h-48 object-cover"
                    height={400}
                    src={PalworldScreenshot.src}
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">palworld-save-tools</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Python</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Python library for parsing and generating save files for the game Palworld.
                    </p>
                    <Link className="inline-flex items-center text-blue-500 hover:text-blue-600"
                          href="https://github.com/cheahjs/palworld-save-tools" target="_blank">
                      Learn More
                      <ArrowRightIcon className="ml-2 h-5 w-5"/>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                  <img
                    alt="Screenshot of palservers.xyz"
                    className="w-full h-48 object-cover"
                    height={400}
                    src={PalserversScreenshot.src}
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">palservers.xyz</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Svelte</Badge>
                      <Badge variant="secondary">Postgres</Badge>
                      <Badge variant="secondary">Go</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">
                      A server list for the game Palworld.
                    </p>
                    <Link className="inline-flex items-center text-blue-500 hover:text-blue-600"
                          href="https://palservers.xyz"
                          target="_blank">
                      Learn More
                      <ArrowRightIcon className="ml-2 h-5 w-5"/>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                  <img
                    alt="Screenshot of the settings page for arcdps-squad-ready-plugin"
                    className="w-full h-48 object-cover"
                    height={400}
                    src={SquadReadyScreenshot.src}
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">arcdps-squad-ready-plugin</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">C++</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Plugin for the game Guild Wars 2 that enables sound notifications for squad readiness.
                    </p>
                    <Link className="inline-flex items-center text-blue-500 hover:text-blue-600"
                          href="https://github.com/cheahjs/arcdps-squad-ready-plugin" target="_blank">
                      Learn More
                      <ArrowRightIcon className="ml-2 h-5 w-5"/>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                  <img
                    alt="Screenshot of arcdps-chat-log"
                    className="w-full h-48 object-cover"
                    height={400}
                    src={ChatLogScreenshot.src}
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">arcdps-chat-log</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Rust</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Plugin for the game Guild Wars 2 that enables users to log chat messages and provide audio
                      accessibility options.
                    </p>
                    <Link className="inline-flex items-center text-blue-500 hover:text-blue-600"
                          href="https://github.com/cheahjs/arcdps-chat-log" target="_blank">
                      Learn More
                      <ArrowRightIcon className="ml-2 h-5 w-5"/>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                  <img
                    alt="Project"
                    className="w-full h-48 object-cover"
                    height={400}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">wintun-mitm</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Go</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Proof of concept for using wintun to intercept network traffic on Windows.
                      Used as part of a security test against a proprietary game networking protocol.
                    </p>
                    <Link className="inline-flex items-center text-blue-500 hover:text-blue-600"
                          href="https://github.com/cheahjs/arcdps-chat-log" target="_blank">
                      Learn More
                      <ArrowRightIcon className="ml-2 h-5 w-5"/>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                  <img
                    alt="Screenshot of the news page"
                    className="w-full h-48 object-cover"
                    height={400}
                    src={FFBENewsScreenshot.src}
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Final Fantasy Brave Exvius News Bot</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Go</Badge>
                      <Badge variant="secondary">C#</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Website that scrapes news from the game Final Fantasy Brave Exvius and posts them to Discord.
                    </p>
                    <Link className="inline-flex items-center text-blue-500 hover:text-blue-600"
                          href="https://github.com/cheahjs/ffbe_news" target="_blank">
                      Learn More
                      <ArrowRightIcon className="ml-2 h-5 w-5"/>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                  <img
                    alt="Project"
                    className="w-full h-48 object-cover"
                    height={400}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Brave Frontier Parser</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Python</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Tool for parsing data such as unit stats and skills from the game Brave Frontier.
                    </p>
                    <Link className="inline-flex items-center text-blue-500 hover:text-blue-600"
                          href="https://github.com/cheahjs/bfdb" target="_blank">
                      Learn More
                      <ArrowRightIcon className="ml-2 h-5 w-5"/>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                  <img
                    alt="Logo of TShock"
                    className="w-full h-48 object-cover"
                    height={400}
                    src={TShockScreenshot.src}
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "scale-down",
                    }}
                    width={600}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">TShock</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">C#</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Formerly a maintainer for TShock, a server modification for the game Terraria that adds
                      extensibility and administration features.
                    </p>
                    <Link className="inline-flex items-center text-blue-500 hover:text-blue-600"
                          href="https://github.com/cheahjs/bfdb" target="_blank">
                      Learn More
                      <ArrowRightIcon className="ml-2 h-5 w-5"/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl text-center">Links</h2>
            <div className="flex flex-wrap -mx-4 justify-center text-center">
              <ul>
                <li>
                  <Link href="https://github.com/cheahjs" target="_blank">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                         className="size-6 invert inline-block mr-2">
                      <path
                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    @cheahjs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

function ArrowRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14"/>
      <path d="m12 5 7 7-7 7"/>
    </svg>
  )
}
