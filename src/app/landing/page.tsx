type Theme = {
  accent: string
  neutral: string
  muted: string
  bg: string
}

const lightTheme = {
  accent: "#0284C7",
  neutral: "#9CA3AF",
  muted: "#6B7280",
  bg: "#F3F4F6",
}

const darkTheme = {
  accent: "#DC3237",
  neutral: "#F3F4F6",
  muted: "#D5D6D6",
  bg: "#1F2937",
}

export default function Landing() {
  const theme = lightTheme

  function CodeIcon() {
    return (
      <svg
        className='w-12 h-12 text-gray-500 dark:text-gray-400'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke={theme.accent}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <polyline points='16 18 22 12 16 6' />
        <polyline points='8 6 2 12 8 18' />
      </svg>
    )
  }

  function DatabaseIcon() {
    return (
      <svg
        className='w-12 h-12 text-gray-500 dark:text-gray-400'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke={theme.accent}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <ellipse cx='12' cy='5' rx='9' ry='3' />
        <path d='M3 5V19A9 3 0 0 0 21 19V5' />
        <path d='M3 12A9 3 0 0 0 21 12' />
      </svg>
    )
  }

  function ShieldIcon() {
    return (
      <svg
        className='w-12 h-12 text-gray-500 dark:text-gray-400'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke={theme.accent}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <path d='M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z' />
      </svg>
    )
  }

  return (
    <section className='w-full h-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
      <div className='container px-4 md:px-6 text-center'>
        <div className='max-w-3xl mx-auto space-y-6'>
          <h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl'>
            Your Brand&apos;s Full Potential{" "}
            <span className={`text-${theme.accent}`}>Unlocked</span>
          </h1>
          <p className='text-lg text-gray-500 dark:text-gray-400'>
            Take your products to the next level with a sleek, responsive site
            that stands out from the competition.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
            <div className='flex flex-col items-center space-y-3'>
              <CodeIcon />
              <h3 className='text-xl font-semibold'>Front-end</h3>
              <p className='text-gray-500 dark:text-gray-400'>
                Crafting visually stunning and highly interactive user
                experiences.
              </p>
            </div>
            <div className='flex flex-col items-center space-y-3'>
              <DatabaseIcon />
              <h3 className='text-xl font-semibold '>Back-end</h3>
              <p className='text-gray-500 dark:text-gray-400'>
                Building robust and scalable server-side infrastructure.
              </p>
            </div>
            <div className='flex flex-col items-center space-y-3'>
              <ShieldIcon />
              <h3 className='text-xl font-semibold '>Security</h3>
              <p className='text-gray-500 dark:text-gray-400'>
                Ensuring the safety and integrity of your web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
