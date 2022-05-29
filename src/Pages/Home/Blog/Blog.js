import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-4xl text-center font-bold'>Question and Answer</h2>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 px-12'>
            
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Q. How will you improve the performance of a React Application?</h2>
        <p>
        1 অপরিবর্তনীয় ডেটা স্ট্রাকচার ব্যবহার করা। <br />
        2 একাধিক খণ্ড ফাইল ।<br />
        3 ওয়েবপ্যাকে প্রোডাকশন মোড ফ্ল্যাগ ব্যবহার করা।<br />
        4 Dependency অপ্টিমাইজেশান।<br />
        5 রেন্ডার ফাংশনে ইনলাইন ফাংশন সংজ্ঞা এড়িয়ে চলুন।</p>
    
  </div>
</div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Q. What are the different ways to manage a state in a React application?</h2>
    <p> 1 Communication State.<br />
        2 Data State.<br />
        3 Control State.<br />
        4 Session State.<br />
        5 Location State.</p>
    
  </div>
</div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Q. How does prototypical inheritance work?</h2>
    <p>প্রোটোটাইপ্যাল ​​ইনহেরিট্যান্স হল জাভাস্ক্রিপ্টের একটি বৈশিষ্ট্য যা object এ পদ্ধতি এবং বৈশিষ্ট্য যোগ করতে ব্যবহৃত হয়। এটি এমন একটি পদ্ধতি যার মাধ্যমে একটি object অন্য object এর বৈশিষ্ট্য এবং পদ্ধতির উত্তরাধিকারী হতে পারে। ঐতিহ্যগতভাবে, একটি object [[প্রোটোটাইপ]] পেতে এবং সেট করার জন্য, আমরা অবজেক্ট ব্যবহার করি।</p>
    
  </div>
</div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Q. What is a unit test? Why should write unit tests?</h2>
    <p>ইউনিট পরীক্ষাগুলি সাধারণত স্বয়ংক্রিয় পরীক্ষাগুলি লিখিত এবং সফ্টওয়্যার developer দ্বারা চালিত হয় তা নিশ্চিত করার জন্য যে একটি অ্যাপ্লিকেশনের একটি অংশ ("ইউনিট" নামে পরিচিত) এর নকশা পূরণ করে এবং উদ্দেশ্য অনুসারে আচরণ করে। পদ্ধতিগত প্রোগ্রামিংয়ে, একটি ইউনিট একটি সম্পূর্ণ মডিউল হতে পারে, তবে এটি সাধারণত একটি পৃথক ফাংশন বা পদ্ধতি।</p>
    
  </div>
</div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Q. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h2>
    <p> যখন state সরাসরি আপডেট করা হয়, তখন এটি পরিবর্তন করে না। অবিলম্বে state এর. পরিবর্তে, এটি একটি মুলতুবি অবস্থার রূপান্তর তৈরি করে, এবং এই পদ্ধতিতে কল করার পরে এটি অ্যাক্সেস করা শুধুমাত্র বর্তমান মান ফিরিয়ে দেবে। তখন সমস্ত উপাদান জুড়ে state নিয়ন্ত্রণ হারাতে হবে।</p>
    
  </div>
</div>
</div>
        </div>
    );
};

export default Blog;