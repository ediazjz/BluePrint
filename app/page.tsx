import { Button } from "@/components"
import { Capacitacion } from "@/components/Capacitacion"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="my-32 mb-12">Prueba de Cascading</h1>

      <section className="a b">
        <h2>A -&gt; B</h2>
      </section>

      <section className="b a first: group">
        <h2>B -&gt; A</h2>
      </section>

      <Button
        text="Click me"
        colorStyle="btn-primary-ghost"
        className="relative z-10 md:btn-accent-filled before:absolute before:inset-0 before:-z-20 before:h-full before:w-full before:bg-black after:absolute after:inset-0 after:-z-10 after:h-full after:w-1/2 after:bg-accent after:content-['Hola'] before:hover:-bottom-4 hover:before:-right-4 before:hover:bg-teal-600"
      />
    </main>
  )
}
