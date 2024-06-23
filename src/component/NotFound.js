import '../App.css';
import { Link } from 'react-router-dom';
export default function Example() {
    return (
      <main class="grid min-h-full place-items-center bg-slate-900 px-6 py-40 sm:py-52 lg:px-8">
  <div class="text-center">
    <p class="text-8xl font-semibold text-cyan-700">404</p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-slate-200 sm:text-5xl">الصفحة غير متوفرة حاليا</h1>
    <p class="mt-6 text-base leading-7 text-slate-200" style={{ direction: 'rtl' }}>عذرًا، لم نتمكن من العثور على الصفحة التي تبحث عنها.</p>
    <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-6">
      <Link to={`/`}>
        <a class="rounded-md bg-cyan-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">اذهب الى الصفحة الرئيسية</a>
      </Link>
      <a href="https://t.me/ismailaltabbal" class="text-sm font-semibold  text-slate-200">تواصل مع المطور<span className='px-2' aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</main>
    )
  }
  