import '../App.css';

export default function Example({isOne, link, titel, descripe}) {
  
    return (
      <a href={link}>
        <div class="group relative flex flex-row-reverse gap-x-6 rounded-lg p-4 border border-white border-opacity-5 bg-slate-500 bg-opacity-10 backdrop-blur">
          {isOne === 'tel' && (
            <i class="fi fi-brands-telegram text-4xl text-sky-500 shhadow"></i>
          )}
          {isOne === 'you' && (
            <i class="fi fi-brands-youtube text-4xl text-red-500 shhadowr"></i>
          )}
          <div class="flex flex-col">
            <h2 class="text-right">
            <a href="#" class="font-semibold text-white">
            {titel}
            </a>
            </h2>
            <p class="mt-1 text-slate-400 text-right"  style={{ direction: 'rtl' }}>{descripe}</p>
          </div>
        </div>
    </a>
    )
}