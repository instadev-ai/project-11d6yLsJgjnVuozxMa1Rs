import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const FeaturedPosts = () => {
  const posts = [
    {
      title: "Getting Started Guide",
      author: "Sarah Johnson",
      description: "Everything you need to know about our community.",
      comments: 24,
      likes: 156,
    },
    {
      title: "Monthly Meetup",
      author: "Mike Peters",
      description: "Join us for our next community gathering!",
      comments: 18,
      likes: 89,
    },
    {
      title: "Community Guidelines",
      author: "Admin Team",
      description: "Important rules and guidelines for all members.",
      comments: 32,
      likes: 245,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Discussions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>By {post.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{post.comments} comments</span>
                  <span>{post.likes} likes</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedPosts