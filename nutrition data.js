// بيانات النصائح (تم إضافة id و videoUrl)
const tips = [
    {
        id: 1, // تم الإضافة
        img: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg",
        title: "تناول وجبات متوازنة",
        desc: "احرص على تناول وجبات تحتوي على كافة العناصر الغذائية الأساسية.",
        videoUrl: "https://www.youtube.com/embed/aOrCMvKgRRo" // **رابط التضمين (Embed) الجديد**
    },
    {
        id: 2, // تم الإضافة
        img: "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg",
        title: "المزيد من الخضروات والفواكه",
        desc: "غنية بالفيتامينات والمعادن والألياف لتعزيز مناعتك.",
        videoUrl: "https://www.youtube.com/embed/KpFR2KMJ1hg" // تم تحويله إلى Watch URL
    },
    {
        id: 3, // تم الإضافة
        img: "https://images.pexels.com/photos/1458678/pexels-photo-1458678.jpeg",
        title: "اشرب كمية كافية من الماء",
        desc: "الماء ضروري لتنشيط الهضم وتجديد الخلايا.",
        videoUrl: "https://www.youtube.com/embed/Tl51D18IMc0" // فيديو افتراضي للنصيحة
    },
    {
        id: 4, // تم الإضافة
        img: "https://images.pexels.com/photos/952479/pexels-photo-952479.jpeg",
        title: "تجنب الأطعمة المصنعة",
        desc: "قلل من السكريات والدهون الزائدة واعتمد الخيارات الطبيعية.",
        videoUrl: "https://www.youtube.com/embed/uyoWakTL0Tw" // فيديو افتراضي للنصيحة
    }
];

// بيانات الوصفات (بدون تغيير، حيث تم تحديثها سابقًا)
const recipes = [
    {
        id: 101, 
        img: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
        title: "سلطة الكينوا بالأفوكادو",
        desc: "غنية بالبروتين والألياف، مثالية كوجبة خفيفة مشبعة وصحية.",
        videoUrl: "https://www.youtube.com/embed/xN6uorCd7Fg" 
    },
    {
        id: 102, 
        img: "https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg",
        title: "فطور الشوفان بالموز والعسل",
        desc: "طاقة طبيعية لبداية اليوم، سريع التحضير وغني بالعناصر المفيدة.",
        videoUrl: "https://www.youtube.com/embed/Myk_JccaJB4" 
    },
    {
        id: 103, 
        img: "https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg",
        title: "لفائف دجاج مشوي وخضار",
        desc: "وجبة خفيفة غنية بالبروتين وقليلة الدهون، مناسبة للغداء أو العشاء.",
        videoUrl: "https://www.youtube.com/embed/lQ9vTpuYRU4" 
    }
];

// بيانات التحديات (تم إضافة id و videoUrl)
const challenges = [
    {
        id: 201, // تم الإضافة
        img: "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg",
        title: "تحدي الوجبة الصحية",
        desc: "شارك وصور وجبة صحية كل يوم لمدة أسبوع.",
        btnText: "شارك الآن",
        btnClass: "btn-primary",
        videoUrl: "https://www.youtube.com/embed/B1NiBCdZ0Z8" // فيديو افتراضي للتحدي
    },
    {
        id: 202, // تم الإضافة
        img: "https://images.pexels.com/photos/1137340/pexels-photo-1137340.jpeg",
        title: "تحدي الماء",
        desc: "تحدي شرب 8 أكواب ماء يوميًا لمدة 7 أيام.",
        btnText: "ابدأ التحدي",
        btnClass: "btn-success",
        videoUrl: "https://www.youtube.com/embed/cEBylUdb-Co" // فيديو افتراضي للتحدي
    },
    {
        id: 203, // تم الإضافة
        img: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
        title: "تحدي التوقف عن السكر",
        desc: "امتنع عن تناول السكريات المصنعة لمدة 10 أيام وحسّن طاقتك.",
        btnText: "ابدأ التحدي",
        btnClass: "btn-danger",
        videoUrl: "https://www.youtube.com/embed/_AgfxdXozP4" // فيديو افتراضي للتحدي
    },
    {
        id: 204, // تم الإضافة
        img: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
        title: "تحدي الوجبة النباتية",
        desc: "جرّب تناول وجبة نباتية واحدة يوميًا لمدة أسبوع.",
        btnText: "شارك التحدي",
        btnClass: "btn-purple",
        videoUrl: "https://www.youtube.com/embed/w6n6lQAIk4Y" // فيديو افتراضي للتحدي
    }
];