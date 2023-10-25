import Image from "next/image"

import { StyledLink } from "@/components"

export const Main = () => {
  return (
    <main className="relative flex h-[75vh] min-h-[40rem] flex-col items-center justify-center px-4 md:px-16 md:text-center xl:px-32 2xl:px-48">
      <h1 className="display mb-8 w-full xl:mb-12">
        Discover <span className="display text-primary">Great</span>ness
        <br />
        in <span className="display text-secondary">recruiting</span>
      </h1>

      <p className="mb-4 w-full md:mb-6">
        Elevate your hiring process with a fusion of efficiency, speed, and
        transparency.
        <br className="mb-4" />
        With <span className="focus text-primary">Great</span>, make every
        recruitment endeavour a remarkable one.
      </p>

      <div className="flex w-full space-x-3 md:w-fit xl:space-x-4">
        <StyledLink
          type="internal"
          href="#features"
          text="Learn more"
          styling="btn-primary-filled"
          className="w-full md:w-fit"
        />

        <StyledLink
          type="internal"
          href="#pricing"
          text="Explore pricing"
          styling="btn-dark-outlined"
          className="w-full md:w-fit"
        />
      </div>

      <div className="absolute -z-10 h-full w-full bg-white opacity-60 backdrop-blur-3xl"></div>

      <Image
        src="/thumbnail.png"
        alt="Greatness in recruiting"
        className="-z-20 object-cover object-left "
        fill
      />
    </main>
  )
}
