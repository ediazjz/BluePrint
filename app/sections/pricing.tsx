import { DisplayTable } from "../../components/display-table"

export const Pricing = () => {
  return (
    <section className="mb-16 px-4 md:mb-20 md:px-16 xl:mb-24 xl:px-32 2xl:px-48">
      <h2 className="mb-2 w-fit xl:mx-auto xl:mb-4">
        Choose Your Path to Recruitment Excellence
      </h2>

      <p className="h5 mb-6 w-fit text-gray-700 xl:mx-auto xl:mb-8">
        Unlock the full potential of Great with a pricing plan that aligns with
        your recruitment goals.
      </p>

      <DisplayTable />
    </section>
  )
}
