import Image from "next/image"

interface TestimonialProps {
  imageUrl: string
  name: string
  title: string
  companyLogoUrl: string
  testimonial: string
  userType: string
}

export const Testimonial: React.FC<TestimonialProps> = ({
  imageUrl,
  name,
  title,
  companyLogoUrl,
  testimonial,
  userType,
}) => {
  return (
    <section className="flex h-[560px] flex-col items-center justify-center rounded-md bg-secondary-ligther p-8">
      <div className="flex">
        <div className="relative">
          <Image src={imageUrl} alt={name} className="object-cover" fill />
        </div>

        <div className="relative">
          <Image
            src={companyLogoUrl}
            alt="Company logo"
            className="object-cover"
            fill
          />
        </div>
      </div>

      <div>
        <h3>{name}</h3>
        <span>{title}</span>
        <span>{userType}</span>
      </div>

      <blockquote>{testimonial}</blockquote>
    </section>
  )
}
