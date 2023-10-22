import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center">
        <section className="flex flex-col w-[900px]">
            <section className="flex flex-col w-full mt-[30px]">
                <h3 className="text-xl">hey, I{`'`}m <span className="font-bold">Saeed</span>{` 👋`}</h3>
                <p className="mt-[20px]">
                a software engineer driven by a passion for excellence, innovation, and efficient problem-solving. Let{`'`}s connect and explore the possibilities of what we can achieve together. 🚀
                </p>
            </section>
            <section className="flex flex-col w-full my-[50px]">
                <ol className="border-l border-neutral-300 dark:border-neutral-500">
                    <li>
                        <div className="flex-start flex items-center pt-3">
                            <div
                            className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                            <p className="text-sm text-neutral-500 dark:text-neutral-300">
                            Apr 2022 - Oct 2023
                            </p>
                        </div>
                        <div className="mb-6 ml-4 mt-2">
                            <h4 className="mb-1.5 text-xl font-semibold">Lead Software Engineer</h4>
                            <h5 className="mb-1.5 text-sm">General Internet</h5>
                            <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                                Refactored and modularized core features of the base software, enabling seamless integration into a scalable and customizable SaaS solution
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex-start flex items-center pt-3">
                            <div
                            className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                            <p className="text-sm text-neutral-500 dark:text-neutral-300">
                            Mar 2021 - Apr 2022
                            </p>
                        </div>
                        <div className="mb-6 ml-4 mt-2">
                            <h4 className="mb-1.5 text-xl font-semibold">Software Engineer</h4>
                            <h5 className="mb-1.5 text-sm">General Internet</h5>
                            <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                            Developed and implemented a user-friendly Documentation module within the internal software, resulting in improved collaboration and knowledge sharing among the development team
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex-start flex items-center pt-3">
                            <div
                            className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                            <p className="text-sm text-neutral-500 dark:text-neutral-300">
                            Nov 2018 - Mar 2021
                            </p>
                        </div>
                        <div className="mb-6 ml-4 mt-2">
                            <h4 className="mb-1.5 text-xl font-semibold">Software/Web Developer</h4>
                            <h5 className="mb-1.5 text-sm">Self-Employed</h5>
                            <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                            Developed a robust and user-friendly appointment scheduling system using NodeJS, MongoDB, and
React, resulting in improved efficiency and seamless appointment management for clients.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex-start flex items-center pt-3">
                            <div
                            className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                            <p className="text-sm text-neutral-500 dark:text-neutral-300">
                            May 2016 - Jun 2018
                            </p>
                        </div>
                        <div className="mb-6 ml-4 mt-2">
                            <h4 className="mb-1.5 text-xl font-semibold">Web Developer</h4>
                            <h5 className="mb-1.5 text-sm">Pars Informatic</h5>
                            <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                            Implemented a customized e-commerce solution using Laravel, resulting in a seamless online retail
experience for customers and a signicant increase in customer engagement metrics.
                            </p>
                        </div>
                    </li>
                </ol>
            </section>
        </section>
    </main>
  )
}
