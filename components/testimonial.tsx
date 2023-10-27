import Image from "next/image"

interface TestimonialProps {
  imageUrl: string
  name: string
  title: string
  companyLogoUrl: string
  testimonial: string
}

export const Testimonial: React.FC<TestimonialProps> = ({
  imageUrl,
  name,
  title,
  companyLogoUrl,
  testimonial,
}) => {
  return (
    <section>
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

      <h3>{name}</h3>
      <span>{title}</span>

      <blockquote>{testimonial}</blockquote>
    </section>
  )
}
