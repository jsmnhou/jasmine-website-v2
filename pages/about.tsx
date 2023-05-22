import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Image from 'next/image'
// import { InferGetStaticPropsType } from 'next'
import PageTitle from '@/components/PageTitle'
import SocialIcon from '@/components/social-icons'
import TopTrackSpotify from 'components/TopTrackSpotify'
import animeTop from '@/data/animeTop'
import Jasmine from 'public/static/images/akira.jpg'
import Link from 'components/Link'

export default function About() {
  return (
    <>
      <PageSEO
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
      />
      <div className="space-y-2 pb-6 pt-6 md:space-y-5">
        <PageTitle>About</PageTitle>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        {/* Sticky Sidebar */}
        <div className="flex flex-col items-center pb-12 pt-2 xl:sticky xl:top-4 xl:items-start">
          <div>
            <Image src={Jasmine} width={200} height={250} alt="pinkie" className="rounded-lg" />
          </div>
          <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">Jasmine Hou</h3>
          <div className="text-gray-500 dark:text-gray-400">University of Michigan</div>
          <div className="flex space-x-3 pt-6">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
            <SocialIcon kind="github" href={siteMetadata.github} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
            <SocialIcon kind="facebook" href={siteMetadata.facebook} />
          </div>
        </div>

        {/* About Me Text */}
        <div className="pb-8 pt-2 text-lg leading-relaxed text-gray-900 dark:text-gray-300 xl:col-span-2">
          Hey, I'm Jasmine! I grew up in the Bay Area and I'm currently in my second year as a
          computer science student at the University of Michigan.{' '}
          <span className="font-semibold text-blue-500">(Go Blue!)</span>
          <br />
          <br />
          <p className="pb-2">When I'm not studying, you'll probably find me:</p>
          <p className="indent-8"> • Playing League or Smash</p>
          {/* link to krool */}
          <p className="indent-8"> • Planning my next snowboarding trip</p>
          <p className="indent-8"> • Watching anime or YouTube video essays</p>
          <br />
          Got any project ideas or anime recommendations, shoot me an email; I would love to chat!
          <div className="mb-4 mt-10 text-2xl font-bold">Some Favorites:</div>
          <a
            className="no-underline"
            href="https://myanimelist.net/profile/ppozzu"
            target="_blank"
            rel="noreferrer"
          >
            <div className="mb-4 text-xl font-normal text-gray-900 hover:font-bold dark:text-gray-300">
              Top Anime
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="ml-1 inline-block h-4 w-4 fill-current"
              >
                <g data-name="Layer 2">
                  <g data-name="external-link">
                    <rect width="24" height="24" opacity="0" />
                    <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                    <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                  </g>
                </g>
              </svg>
            </div>
          </a>
          <div className="grid grid-cols-6">
            {animeTop.map((d, i) => (
              <div key={i} className="relative aspect-[25/36]">
                <a href={d.url} title={d.title} target="_blank" rel="noreferrer" className="">
                  <Image className="my-0 object-cover" src={d.thumbnail} alt={d.title} fill />
                </a>
              </div>
            ))}
          </div>
          <a
            className="no-underline"
            href="https://open.spotify.com/user/ke17fmzadn03r8cr328qxoguo"
            target="_blank"
            rel="noreferrer"
          >
            <div className="mb-2 mt-10 text-xl font-normal text-gray-900 hover:font-bold dark:text-gray-300">
              Top Songs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="ml-1 inline-block h-4 w-4 fill-current"
              >
                <g data-name="Layer 2">
                  <g data-name="external-link">
                    <rect width="24" height="24" opacity="0" />
                    <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                    <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                  </g>
                </g>
              </svg>
            </div>
          </a>
          <div className="mb-6 ">
            <p className="my-0">Click the number for a preview 🎧</p>
          </div>
          <TopTrackSpotify />
          {/* Hershey (pet me)
          <br />
          <br />
          Krool Gifs */}
        </div>
      </div>
      {/* <div className="prose max-w-none pb-8 pt-2 dark:prose-dark xl:col-span-3">
        <h1>Favorites</h1>
        LMAO LMAOLMAO
        <br />
        <br />
      </div> */}
    </>
  )
}
