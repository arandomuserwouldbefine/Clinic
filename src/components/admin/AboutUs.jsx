import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export default function AboutUs() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-start space-y-4">
            <MountainIcon className="h-12 w-12" />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Acme Inc.</h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Acme Inc. is a leading provider of innovative solutions for businesses of all sizes. Our mission is to
              empower our clients with the tools and resources they need to succeed in today's fast-paced digital
              landscape.
            </p>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            src="https://thumbs.dreamstime.com/b/medicine-healthcare-concept-doctor-stethoscope-clinic-close-up-global-125171698.jpg"
            width="550"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission & Values</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              At Acme Inc., we are driven by a passion for innovation and a commitment to excellence. Our mission is to
              empower our clients with cutting-edge solutions that help them achieve their goals and stay ahead of the
              competition.
            </p>
            <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-gray-900 dark:text-gray-50" />
                Integrity: We are committed to the highest ethical standards and always strive to do the right thing.
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-gray-900 dark:text-gray-50" />
                Innovation: We are constantly exploring new technologies and strategies to help our clients stay ahead
                of the curve.
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-gray-900 dark:text-gray-50" />
                Collaboration: We believe that the best solutions come from working together, and we foster a culture of
                teamwork and communication.
              </li>
            </ul>
          </div>
          <img
            alt="Mission"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            src="https://img.freepik.com/free-photo/clinical-reception-with-waiting-room-facility-lobby-registration-counter-used-patients-with-medical-appointments-empty-reception-desk-health-center-checkup-visits_482257-51247.jpg"
            width="550"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
            <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our team of experts is dedicated to delivering exceptional results for our clients. Get to know the key
              members of our team below.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-4">
              <Avatar>
                <AvatarImage alt="Sofia Davis" src="/avatars/01.png" />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
              <div className="space-y-1 text-center">
                <h3 className="text-lg font-semibold">Sofia Davis</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">CEO & Co-Founder</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Sofia is a visionary leader with a passion for technology and a proven track record of driving
                innovation.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Avatar>
                <AvatarImage alt="Jackson Lee" src="/avatars/02.png" />
                <AvatarFallback>JL</AvatarFallback>
              </Avatar>
              <div className="space-y-1 text-center">
                <h3 className="text-lg font-semibold">Jackson Lee</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">CTO & Co-Founder</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Jackson is a seasoned technologist with a deep understanding of cutting-edge technologies and a passion
                for problem-solving.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Avatar>
                <AvatarImage alt="Emma Nguyen" src="/avatars/03.png" />
                <AvatarFallback>EN</AvatarFallback>
              </Avatar>
              <div className="space-y-1 text-center">
                <h3 className="text-lg font-semibold">Emma Nguyen</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Head of Product</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Emma is a product visionary with a deep understanding of user needs and a passion for creating intuitive
                and engaging experiences.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Avatar>
                <AvatarImage alt="Liam Patel" src="/avatars/04.png" />
                <AvatarFallback>LP</AvatarFallback>
              </Avatar>
              <div className="space-y-1 text-center">
                <h3 className="text-lg font-semibold">Liam Patel</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Head of Engineering</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Liam is a seasoned engineer with a passion for building scalable and reliable systems that drive
                business success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

