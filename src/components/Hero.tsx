const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to Our Community
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of members sharing ideas, experiences, and knowledge in a
            supportive environment.
          </p>
          <div className="flex justify-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">5K+</div>
              <div className="text-gray-600">Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">10K+</div>
              <div className="text-gray-600">Discussions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">50+</div>
              <div className="text-gray-600">Events/Month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero