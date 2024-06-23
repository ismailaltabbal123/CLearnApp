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
        
        <Titel titel={"محاضرة 3"}/>
        <Pergrap p={"عنوان المحاضرة: دالة ()scanf"}/>
        <Line/>
        <Space/>

<Pergrap p={" () scanf هي دالة الإدخال الرئيسية التي تسمح بإدخال جميع أنواع البيانات وهي تأخذ نفس المعاملات التي تأخذها الدالة()printf للتعامل مع البيانات والموجودة بالجدول السابق. "}/>
<Sub_titel titel={`مثال التالي يوضح استخدام الدالة ()scanf`}/>  
<CodeBlock codebloke={`#include <stdio.h>
main()
{ 
int a,b,c,sum;
scanf("%d%d%d",&a,&b,&c); // a = 3  ,  b = 5  ,  c = 7
printf("A = %d B = %d C = %d",a,b,c);
sum=a+b+c;
printf("Sum = %d",sum);  // 3 + 5 + 7 = 15
}
`} result={`25`}/>

<Titel titel={"الناتج:"}/>
<Space />
<div className="bg-black p-5 border border-slate-800">
        <h2 className="text-slate-100">{`A = 3 B = 5 C = 7`}</h2>
        <h2 className="text-slate-100">{`Sum = 15`}</h2>
</div>
<Space/>
<Space />
<Space />
<Titel titel={"الشرح:"}/>
<Space />
<CodeBlock codebloke={`int a,b,c,sum;
`} result={`25`}/>
<Pergrap p={`يتم تعريف أربعة متغيرات من نوع int (عدد صحيح): a، b، c، و sum.`}/>
<Space/>
<Space />
<CodeBlock codebloke={`scanf("%d%d%d", &a, &b, &c);
`} result={`25`}/>
<Pergrap p={`الدالة scanf تستخدم لقراءة القيم المدخلة من المستخدم وتخزينها في المتغيرات.`}/>
<Pergrap p={`%d يستخدم لقراءة عدد صحيح (int).`}/>
<Pergrap p={`a&، &b، و &c هي عناوين المتغيرات التي ستخزن فيها القيم المدخلة.`}/>
<Space/>
<Space />
<CodeBlock codebloke={`printf("A = %d B = %d C = %d", a, b, c);
`} result={`25`}/>
<Pergrap p={`الدالة printf تستخدم لطباعة النصوص والقيم على الشاشة.`}/>
<Pergrap p={`A = %d B = %d C = %d هو النص الذي سيتم طباعته، حيث %d سيتم استبدالها بالقيم المدخلة a، b، c.`}/>
<Space/>
<Space />
<CodeBlock codebloke={`sum = a + b + c;
`} result={`25`}/>
<Pergrap p={`يتم حساب مجموع القيم الثلاث المخزنة في المتغيرات a، b، و c وتخزين النتيجة في المتغير sum.`}/>
<Space/>
<Space />
<CodeBlock codebloke={`printf("Sum = %d", sum);
`} result={`25`}/>
<Pergrap p={`يتم استخدام printf مرة أخرى لطباعة النص Sum = متبوعًا بقيمة المتغير sum.`}/>
<Space/>
<Space/>
<Sub_titel titel={'لنفترض أن المستخدم أدخل القيم التالية:'}/>
<Pergrap p={`a = 3`}/>
<Pergrap p={`b = 5`}/>
<Pergrap p={`c = 7`}/>
<Sub_titel titel={'فسيكون الناتج كالتالي:'}/>
<Space />
<div className="bg-black p-5 border border-slate-800">
        <h2 className="text-slate-100">{`A = 3  B = 5  C = 7`}</h2>
        <h2 className="text-slate-100">{`Sum = 15`}</h2>
</div>
<Space/>

</div>
</div>
  );
};

