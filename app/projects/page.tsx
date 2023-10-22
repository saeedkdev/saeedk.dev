import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
    return (
        <main className="flex flex-col w-full items-center">
            <section className="flex flex-col w-[900px]">
                <section className="flex flex-col w-full my-[30px]">
                    <h3 className="text-xl">Check out some of my work 🧠</h3>
                </section>

                <div className="grid grid-cols-3 gap-3">
                    <div className="row-span-3 bg-white p-3 rounded-md border border-slate-200">
                        <h3 className="text-lg">Personal Blog</h3>
                        <p className="text-sm my-2">I maintain my personal blog, where I write articles on subjects that pique my interest.</p>
                        <p className="text-sm my-2">Developed using Next.js, a React framework, and Sanity, a headless CMS.</p>
                        <Link href="https://blog.saeedk.dev" target='_blank' className="text-sm text-blue-500 pr-4">
                            Visit blog
                        </Link>
                        <Link href="https://github.com/saeedkdev/skdev_blog" target='_blank' className="text-sm text-blue-500">
                            Github repo
                        </Link>
                        <Image className="rounded-md mt-8" src="/avatar.png" width={300} height={200} alt='saeed'/>
                    </div>
                    <div className="row-span-2 bg-white p-3 rounded-md border border-slate-200">
                        <h3 className="text-lg">Nabz</h3>
                        <p className="text-sm my-2">A music streaming app inspired by Spotify.</p>
                        <p className="text-sm my-2">Utilizing a combination of TypeScript, NextJS, Supabase</p>
                        <Link href="https://nabz.saeedk.dev" target='_blank' className="text-sm text-blue-500 pr-4">
                            Visit app
                        </Link>
                        <Link href="https://github.com/saeedkdev/nabz" target='_blank' className="text-sm text-blue-500">
                            Github repo
                        </Link>
                        <Image className="rounded-md mt-8" src="/nabz.png" width={300} height={200} alt='saeed'/>
                    </div>
                    <div className="bg-white p-3 rounded-md border border-slate-200">
                        <h3 className="text-lg">BusinessOS</h3>
                        <p className="text-sm my-2">A comprehensive business management system, utilizing a wide range
of tools and technologies to streamline operations and improve efficiency.</p>
                        <Link href="https://businessos.ca" target='_blank' className="text-sm text-blue-500 pr-4">
                            Visit
                        </Link>
                    </div>
                    <div className="bg-white p-3 rounded-md border border-slate-200">
                        <h3 className="text-lg">Raven Chat</h3>
                        <p className="text-sm my-2">A real-time chat application, with Google authentication and a sleek UI.</p>
                        <p className="text-sm my-2">Developed using Next.js, a React framework, and Firebase.</p>
                        <Link href="https://github.com/saeedkdev/raven-chat" target='_blank' className="text-sm text-blue-500">
                            Github repo
                        </Link>
                    </div>
                    <div className="col-span-2 bg-white p-3 rounded-md border border-slate-200">
                        <h3 className="text-lg">EventBase API</h3>
                        <p className="text-sm my-2">A RESTful API for a fictional event management system.</p>
                        <p className="text-sm my-2">Developed using Laravel, a PHP framework and MySQL database.</p>
                        <Link href="https://github.com/saeedkdev/events_api" target='_blank' className="text-sm text-blue-500">
                            Github repo
                        </Link>
                    </div>
                </div>      
            </section>
        </main>
    )
}
