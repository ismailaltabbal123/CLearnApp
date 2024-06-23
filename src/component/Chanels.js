import '../App.css';
import ChanelsCard from './ChanelsCard.js';

export default function Example() {
  
    return (
      <div id="chanels" className="bg-slate-900">
        <div className="relative isolate overflow-hidden bg-gray-900 py-12 sm:py-18 lg:py-14 border-t border-slate-800">
            <div className="mx-auto max-w-7xl">
            <div class="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 class="text-xl font-bold tracking-tight text-white text-right mb-2 sm:text-3xl">قنوات و مجموعات للإستفادة</h2>   
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
           <ChanelsCard isOne={"you"} link={"https://www.youtube.com/@khireddine.bouferah"} titel={"Khireddine Bouferah"} descripe={"تقديم محتوى تعليمي شامل يغطي جميع جوانب لغة C، بدءاً من الأساسيات وصولاً إلى المواضيع المتقدمة."}/>
           <ChanelsCard isOne={"you"} link={"https://www.youtube.com/@aymenhadouara"} titel={"aymen hadouara"} descripe={"تقدم القناة محتوى شامل عن العديد من لغات البرمجة بما في ذلك C تعتبر من أشهر القنوات في المحتوى العربي"}/>
           <ChanelsCard isOne="tel" link={"https://t.me/C_LanguageChannel"} titel={"C language / coding"} descripe={"قناة متخصصة في نشر كل المصادر المتعلقة بمادة السي خاصة بطلبة السيمستر الثاني"}/>
           <ChanelsCard isOne={"tel"} link={"https://t.me/+ND9ShebQApNmMjNk"} titel={"قروب الفصل الثاني"} descripe={"هذه المجموعة مخصصة لطلاب وطالبات كلية تقنية المعلومات لمشاركة وتبادل المواد الدراسية"}/>
        </div>
        </div>  
            </div>
            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
            <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}/>
            </div>
    </div>
        {/* ################################### */}
        {/* <div class="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 class="text-xl font-bold tracking-tight text-white text-right mb-2 sm:text-3xl">قنوات و مجموعات للإستفادة</h2>   
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
           <ChanelsCard isOne="tel"/>
           <ChanelsCard isOne={"you"}/>
           <ChanelsCard isOne={"tel"}/>
           <ChanelsCard isOne={"you"}/>
        </div>
        </div> */}
        </div>
    )
}