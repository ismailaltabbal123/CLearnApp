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
        <Titel titel={"محاضرة 1"}/>
        <Pergrap p={"عنوان المحاضرة: مقدمة حول لغة سي"}/>
         
        <Line/>
        <CodeBlock codebloke={`#include <stdio.h>

main()
{ // start

    printf("hello world");
} //stop
`} result={`hello world`}/>

<Titel titel={"الناتج:"}/>
<Space />
<div className="bg-black p-5 border border-slate-800">
            <h2 className="text-slate-100">{`hello world`}</h2>
</div>
<Space/>

        <Sub_titel titel={`السطر الأول: <include <stdio.h#`}/>
        <Pergrap p={"هذا السطر هو توجيه قبل المعالجة (preprocessor directive) يخبر المترجم (compiler) بأن يتضمن مكتبة المدخلات والمخرجات القياسية (Standard Input Output Library) المسماة stdio.h. هذه المكتبة تحتوي على دوال (functions) مفيدة مثل printf و scanf التي تستخدم لعرض النصوص واستقبال المدخلات من المستخدم."}/>
        <Pergrap p={"بدون هذا السطر، لن تستطيع استخدام دوال الإدخال والإخراج القياسية في برنامجك."}/>
        
        <Space/>
        
        <Space/>
        
        <Sub_titel titel={`السطر الثاني: ()main`}/>
        <Pergrap p={"شرح: هذه هي نقطة البداية لأي برنامج مكتوب بلغة C. الدالة main هي الدالة الرئيسية التي يتم استدعاؤها عند بدء تشغيل البرنامج."}/>
        <Pergrap p={"الأهمية: جميع التعليمات البرمجية التي تريد أن تُنفذ عند تشغيل البرنامج توضع داخل هذه الدالة."}/>
        
        <Space/>

        <Sub_titel titel={`القوس { بعد ()main`}/>
        <Pergrap p={"القوس المفتوح { يشير إلى بداية كتلة التعليمات (block of code) التي تخص الدالة main."}/>
        <Pergrap p={"الكود المحصورة بين { و } تحتوي على التعليمات التي يتم تنفيذها عند استدعاء الدالة."}/>
        
        <Space/>

        <Sub_titel titel={`السطر ;printf("hello world")`}/>
        <Pergrap p={"شرح: دالة printf هي إحدى دوال مكتبة stdio.h وتستخدم لطباعة النصوص إلى الشاشة. النص المراد طباعته يتم وضعه بين علامتي اقتباس مزدوجة (' ')."}/>
        <Pergrap p={"هذه الدالة هي الأساس لطباعة النصوص في لغة C، وتستخدم بشكل واسع في البرمجة لعرض الرسائل والمخرجات."}/>

        <Space/>

        <Sub_titel titel={`القوس }`}/>
        <Pergrap p={"القوس المغلق } يشير إلى نهاية كتلة التعليمات الخاصة بالدالة main."}/>
        <Pergrap p={"هذه الدالة هي الأساس لطباعة النصوص في لغة C، وتستخدم بشكل واسع في البرمجة لعرض الرسائل والمخرجات."}/>

        <Space/>

        <Space/>
        
      </div>
    </div>
  );
};

