import Nav from "@/components/Nav"
import Landing from "@/app/landing/page"

export default function Home() {
  return (
    <main className='flex flex-col w-screen h-screen overflow-hidden font-md'>
      <Nav />
      <Landing />
    </main>
  )
}
