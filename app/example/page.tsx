export default function Page() {
  return (
    <main className="main">
      <h1>Layout with Flexbox or Grid?</h1>

      <h2>Flex</h2>
      <div className="flex-container">
        <div className="bg-red-300">1st div with content</div>
        <div className="bg-blue-300">2nd div with content</div>
        <div className="bg-yellow-300">3rd div with content</div>
        <div className="example bg-gray-300">4th div with content</div>
        <div className="bg-teal-300">5th div with content</div>
        <div className="bg-purple-300">6th div with content</div>
        <div className="bg-orange-300">7th div with content</div>
        <div className="bg-pink-300">8th div with content</div>
      </div>

      <h2>Grid</h2>
      <div className="grid-container">
        <div className="bg-red-300">1st div with content</div>
        <div className="bg-blue-300">2nd div with content</div>
        <div className="bg-yellow-300">3rd div with content</div>
        <div className="bg-gray-300">4th div with content</div>
        <div className="bg-teal-300">5th div with content</div>
        <div className="bg-purple-300">6th div with content</div>
        <div className="bg-orange-300">7th div with content</div>
        <div className="bg-pink-300">8th div with content</div>
      </div>

      <h2>Example Flexbox</h2>
      <div className="flex-container example">
        <div>
          <h3>Effortless Efficiency</h3>
          <p>
            Seamlessly draft and manage job offerings, guiding your recruitment
            voyage from inception to a triumphant conclusion.
          </p>
        </div>
        <div>
          <h3>Rapid Results</h3>
          <p>
            Speed through candidate evaluations with intuitive tools, ensuring a
            quick turnaround without compromising on quality.
          </p>
        </div>
        <div>
          <h3>Transparent Transactions</h3>
          <p>
            Engage in clear and open interactions throughout the recruitment
            cycle, building trust among customers, recruiters, and candidates.
          </p>
        </div>
      </div>

      <h2>Example Grid</h2>
      <div className="grid-container example-grid">
        <div>
          <h3>Effortless Efficiency</h3>
          <p>
            Seamlessly draft and manage job offerings, guiding your recruitment
            voyage from inception to a triumphant conclusion.
          </p>
        </div>
        <div>
          <h3>Rapid Results</h3>
          <p>
            Speed through candidate evaluations with intuitive tools, ensuring a
            quick turnaround without compromising on quality.
          </p>
        </div>
        <div>
          <h3>Transparent Transactions</h3>
          <p>
            Engage in clear and open interactions throughout the recruitment
            cycle, building trust among customers, recruiters, and candidates.
          </p>
        </div>
      </div>

      <h2>Final Example</h2>
      <div className="grid-container testimonials">
        <div className="bg-red-300">1st div with content</div>
        <div className="bg-blue-300">2nd div with content</div>
        <div className="bg-yellow-300">3rd div with content</div>

        <div className="bg-gray-300">4th div with content</div>

        <div className="bg-teal-300">5th div with content</div>
        <div className="bg-purple-300">6th div with content</div>
        <div className="bg-orange-300">7th div with content</div>
      </div>
    </main>
  )
}
