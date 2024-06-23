import '../App.css';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
export default function Example() {
  
    return (
    <footer className="bg-slate-950">
        <div className="flex flex-col md:flex-row justify-between mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:pt-10 sm:pb-7 lg:max-w-7xl lg:px-8 gap-5">
            <h5 className="text-white text-center md:text-left text-lg">© 2024 Ismail Altabbal. All rights reserved.</h5>
            <div className="flex flex-row justify-center gap-x-5">
            <a href="https://www.facebook.com/profile.php?id=100082972376500&mibextid=kFxxJD">
            <i class="fi fi-brands-facebook text-[20px] md:text-[25px] text-white"></i>
            </a>
            <a href="https://www.behance.net/ismailaltabbal">
            <i class="fi fi-brands-behance text-[20px] md:text-[25px] text-white"></i>
            </a>
            <a href="https://www.instagram.com/ismail_altabbal_?igsh=NTQ2MjJzdmE2ZmR2">
            <i class="fi fi-brands-instagram text-[20px] md:text-[25px] text-white"></i>
            </a>
            <a href="https://www.linkedin.com/in/ismail-altabbal-b558b4236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <i class="fi fi-brands-linkedin text-[20px] md:text-[25px] text-white"></i>
            </a>
            <h2 className="text-white text-lg">:حساباتي</h2>
            </div>
        </div>
    </footer>
    )
}