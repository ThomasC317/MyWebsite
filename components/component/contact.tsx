import { CardContent, Card } from "@/components/ui/card"

export function Contact() {
  return (
    <div className="mt-12">
      <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-3 md:px-6 mx-auto">
        <Card>
          <CardContent className="flex items-center gap-4">
            <div className="contact-body">
            <PhoneIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            <div className="contact-card-body">
              <div className="text-xl font-semibold">Mon Numéro</div>
              <p className="text-gray-500 dark:text-gray-400">07.82.41.18.35</p>
            </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 text-center">
          <div className="contact-body">
            <MailOpenIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            <div className="contact-card-body">
              <div className="text-xl font-semibold">Mon Email</div>
              <p className="text-gray-500 dark:text-gray-400">
                <a href="#">thomas.cerdera@gmail.com</a>
              </p>
            </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4">
          <div className="contact-body">
            <MapPinIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            <div className="contact-card-body">
              <div className="text-xl font-semibold">Je vis à </div>
              <p className="text-gray-500 dark:text-gray-400">Toulouse</p>
            </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function MailOpenIcon(props) {
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
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  )
}


function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
