import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className='text-2xl items-center justify-center flex flex-col w-full h-full '>
      <h1 className="underline font-extrabold ">
        Here's a TEMPLATE WITH THE FOLLOWING DEPENDENCIES:</h1>
      <ol>
                <li>SHADCN</li>
                <li>PRISMA</li>
                <li>REACT-ICONS</li>
                <li>ZUSTAND</li>
                <li>TAILWINDCSS</li>
                <li>REACT JS WITH VITE</li>
            </ol>
            Created by @DimitriTedom alias SnowDev for Code Lovers !!!
      <Button>Here is a SHadCn button</Button>

    </div>
  )
}
