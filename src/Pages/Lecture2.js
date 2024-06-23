import React from 'react';
import Titel from '../component/StyleComp/titel';
import Sub_titel from '../component/StyleComp/sub_titel';
import Pergrap from '../component/StyleComp/pergrap';
import Space from '../component/StyleComp/space.js';
import CodeBlock from '../component/StyleComp/CodeBlockP.js';
import Line from '../component/StyleComp/line.js';

export default function Lecture1() {
  return (
    <div className="bg-slate-900 min-h-screen pt-24 sm:pt-5 pb-20">
      <div className="mx-3 md:mx-auto lg:mx-5 xl:mx-auto bg-slate-950 max-w-2xl px-3 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 mt-3 sm:mt-20 rounded-xl">
        
        <Titel titel={"محاضرة 2"}/>
        <Pergrap p={"عنوان المحاضرة: انواع البيانات"}/>
        
        <Line/>
        <Space/>

<Sub_titel titel={`أنواع البيانات في لغة C`}/>
<Pergrap p={"تُعدّ أنواع البيانات في لغة البرمجة C أساسية لفهم كيفية تخزين البيانات ومعالجتها في البرامج. تُحدد هذه الأنواع خصائص البيانات التي يمكن تخزينها في المتغيرات، مثل الحجم والنطاق ونوع العمليات التي يمكن إجراؤها عليها."}/>
<Sub_titel titel={`أنواع البيانات الأساسية`}/>
<Sub_titel titel={`1. int`}/>
<Pergrap p={"يستخدم لتخزين الأعداد الصحيحة (integer numbers) مثل 1، -5، 42."}/>
<Pergrap p={"الحجم النموذجي: 4 بايت (32 بت) على معظم الأنظمة."}/>
<Pergrap p={"النطاق: -2,147,483,648 إلى 2,147,483,647."}/>
<CodeBlock codebloke={`#include <stdio.h>

main()
{
int age = 25;
printf("%d",age);
}
`} result={`25`}/>

<Titel titel={"الناتج:"}/>
<Space />
<div className="bg-black p-5 border border-slate-800">
            <h2 className="text-slate-100">{`25`}</h2>
</div>
<Space/>

<Space/>

<Sub_titel titel={`2. float`}/>
<Pergrap p={"يستخدم لتخزين الأعداد العشرية (floating-point numbers) مثل 3.14، -0.001."}/>
<Pergrap p={"الحجم النموذجي: 4 بايت (32 بت)."}/>
<Pergrap p={"النطاق: تقريبًا ±3.4×10^38 (سبعة أرقام عشرية تقريبًا)."}/>
<CodeBlock codebloke={`#include <stdio.h>

main()
{
float temperature = 36.5;
printf("%f",temperature);
}
`} result={`36.5`}/>

<Titel titel={"الناتج:"}/>
<Space />
<div className="bg-black p-5 border border-slate-800">
            <h2 className="text-slate-100">{`36.5`}</h2>
</div>
<Space/>


<Space/>

<Sub_titel titel={`3. double`}/>
<Pergrap p={"يستخدم لتخزين الأعداد العشرية بدقة مضاعفة (double precision floating-point numbers)."}/>
<Pergrap p={"الحجم النموذجي: 8 بايت (64 بت)."}/>
<Pergrap p={"النطاق: تقريبًا ±1.7×10^308 (خمسة عشر رقمًا عشريًا تقريبًا)."}/>
<CodeBlock codebloke={`#include <stdio.h>

main()
{
double pi = 3.141592653589793;
printf("%f",pi);
}
`} result={`3.141592653589793`}/>

<Titel titel={"الناتج:"}/>
<Space />
<div className="bg-black p-5 border border-slate-800">
            <h2 className="text-slate-100">{`3.141592653589793`}</h2>
</div>
<Space/>
        <Space/>

        <Sub_titel titel={`4. char`}/>
<Pergrap p={"يستخدم لتخزين الأحرف (characters) مثل 'a'، 'Z'، '@'."}/>
<Pergrap p={"الحجم النموذجي: 1 بايت (8 بت)."}/>
<Pergrap p={"النطاق: -128 إلى 127 أو 0 إلى 255، حسب ما إذا كانت الإشارة موقعة أو غير موقعة."}/>
<CodeBlock codebloke={`#include <stdio.h>

main()
{
char letter = 'A';
printf("%c",letter);
}
`} result={`A`}/>

<Titel titel={"الناتج:"}/>
<Space />
<div className="bg-black p-5 border border-slate-800">
            <h2 className="text-slate-100">{`A`}</h2>
</div>

        <Space/>
        <Line/>
        <Space/>

        <Sub_titel titel={`ما الفرق بين float و double ؟`}/>
        <Pergrap p={"float: يُستخدم عندما تكون الدقة غير مهمة للغاية، أو عندما تكون مساحة الذاكرة محدودة."}/>
        <Pergrap p={"double: يُستخدم عندما تكون الدقة ضرورية، أو عندما تكون هناك حاجة إلى نطاق أوسع من القيم."}/>

        <Space/>
        <Line/>

        <Sub_titel titel={`ملاحظة: يجب تعريف المتغير قبل استخجامه`}/>

        <Line/>
        <Space/>
        
        <Space/>

        <Sub_titel titel={`قواعد تسمية المتغيرات في لغة البرمجة C:`}/>
        <Pergrap p={"تُعدّ قواعد تسمية المتغيرات في لغة البرمجة C مهمة لكتابة أكواد سهلة القراءة والفهم والصيانة. تهدف هذه القواعد إلى ضمان اتباع نهج متسق ومنطقي في تسمية المتغيرات، مما يُحسّن من وضوح الكود ويُسهل عملية التعديل والتعاون بين المبرمجين."}/>
        <Space/>
        <Pergrap p={"1. اسم دلالي: يجب أن يكون اسم المتغير وصفياً وذا صلة بالغرض الذي يُستخدم من أجله. على سبيل المثال، بدلاً من استخدام اسم x، يُمكن استخدام اسم age أو student_id لمتغير يُخزن عمر الشخص أو رقم تعريف الطالب."}/>
        <Space/>
        <Pergrap p={"2. الكلمات: يُمكن استخدام أحرف اللغة الإنجليزية (أحرف كبيرة وصغيرة) والأرقام وشرطات السفلية (_) في أسماء المتغيرات."}/>
        <Space/>
        <Pergrap p={"3. لا مسافات: لا يُسمح باستخدام المسافات في أسماء المتغيرات."}/>
        <Space/>
        <Pergrap p={"4. الكلمات المفتاحية: لا يُمكن استخدام الكلمات المفتاحية في لغة C كأسماء للمتغيرات. تشمل الكلمات المفتاحية مثل int، float، if، while، إلخ."}/>
        <Space/>
        <Pergrap p={"5. الحرف الأول: يجب أن يبدأ اسم المتغير بحرف أو شرطة سفلية (_). لا يُسمح باستخدام الأرقام في بداية الاسم."}/>
        <Space/>
        <Pergrap p={"6. الحجم: لا يوجد قيود محددة على طول اسم المتغير، لكن يُنصح باستخدام أسماء قصيرة وواضحة."}/>
        <Space/>
        <Pergrap p={"7. الاتساق: من المهم اتباع نهج متسق في تسمية المتغيرات عبر البرنامج. على سبيل المثال، إذا تم استخدام اسم student_id لتخزين رقم تعريف الطالب، فمن المنطقي استخدام نفس الاسم في جميع أنحاء البرنامج بدلاً من استخدام أسماء مختلفة مثل id أو studentNumber."}/>

        <Space/>
        <CodeBlock codebloke={`main()
{ 
    int sum = 33;
    float money = 44.12;
    char letter ;
    double pressure ;
    letter = 'E' ;
    pressure = 2.01e-10;
    printf("Value of sum is %d",sum);
    printf("Value of money is %f",money);
    printf("Value of Letter is %c",letter);
    printf("Value of pressure is %e",pressure);
}
`}/>
<Titel titel={"الناتج:"}/>
<Space />
<div className="bg-black p-5 border border-slate-800">
            <h2 className="text-slate-100">{`Value of sum is 33`}</h2>
            <h2 className="text-slate-100">{`Value of money is 44.120000`}</h2>
            <h2 className="text-slate-100">{`Value of Letter is E`}</h2>
            <h2 className="text-slate-100">{`Value of pressure is 2.010000e-10`}</h2>
</div>
        <Space/>
        <Space/>

<Sub_titel titel={`;int sum = 33`}/>
        <Pergrap p={"تعريف متغير من نوع int (عدد صحيح) يسمى sum ويتم تعيين القيمة 33 له."}/>
        <Space/>
        <Sub_titel titel={`;float money = 44.12`}/>
        <Pergrap p={"تعريف متغير من نوع float (عدد عشري) يسمى money ويتم تعيين القيمة 44.12 له."}/>
        <Space/>
        <Sub_titel titel={`;char letter`}/>
        <Pergrap p={"تعريف متغير من نوع char (حرف) يسمى letter بدون تعيين قيمة ابتدائية له."}/>
        <Space/>
        <Sub_titel titel={`;double pressure`}/>
        <Pergrap p={"تعريف متغير من نوع double (عدد عشري مضاعف الدقة) يسمى pressure بدون تعيين قيمة ابتدائية له."}/>
        <Space/>
        <Sub_titel titel={`;letter = 'E`}/>
        <Pergrap p={"تعيين القيمة 'E' للمتغير letter."}/>
        <Space/>
        <Sub_titel titel={`;pressure = 2.01e-10`}/>
        <Pergrap p={"تعيين القيمة 2.01e-10 للمتغير pressure. القيمة 2.01e-10 تعني 2.01 * 10^-10 (الترميز العلمي)."}/>
        <Space/>
        <Sub_titel titel={`;printf("Value of sum is %d", sum)`}/>
        <Pergrap p={"يطبع النص Value of sum is متبوعًا بقيمة المتغير sum باستخدام تنسيق %d لطباعة الأعداد الصحيحة."}/>
        <Space/>
        <Sub_titel titel={`;printf("Value of money is %f`}/>
        <Pergrap p={"يطبع النص Value of money is متبوعًا بقيمة المتغير money باستخدام تنسيق %f لطباعة الأعداد العشرية."}/>
        <Space/>
        <Sub_titel titel={`;printf("Value of Letter is %c", letter)`}/>
        <Pergrap p={"يطبع النص Value of Letter is متبوعًا بقيمة المتغير letter باستخدام تنسيق %c لطباعة الأحرف."}/>
        <Space/>
        <Sub_titel titel={`;printf("Value of pressure is %e", pressure)`}/>
        <Pergrap p={"يطبع النص Value of pressure is متبوعًا بقيمة المتغير pressure باستخدام تنسيق %e لطباعة الأعداد العشرية بالترميز العلمي."}/>
        <Space/>

      </div>
    </div>
  );
};

