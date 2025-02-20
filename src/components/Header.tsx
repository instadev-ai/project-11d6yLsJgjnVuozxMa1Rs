import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">Community Hub</h1>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Discussions</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Members</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Events</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button>Join Now</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header