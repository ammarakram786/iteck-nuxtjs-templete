<template>
  <div>
    <h4 class="fw-bold color-000 lh-4 mb-30">{{ rtl ? 'بمناسبة العرض الأول في المملكة المتحدة للفنان هنري باراندي ، المطور' : 'To mark the first UK show of artist Henri Barande, developer' }} <a href="#" :class="`color-blue${styleType}`">{{ rtl ? 'موسي' : 'Moussa' }}</a> {{ rtl ? 'واستوديو Schultzschultz الألماني قاما بإنشاء The Lodge Wooden في مدينة برلين' : 'and German studio Schultzschultz  have created The Lodge Wooden at Berlin City' }}</h4>
    <div class="text mb-10 color-666">
      {{ rtl ? 'اليوم ، يمارس معظم الناس في المتوسط 4 إلى 6 ساعات من التمارين كل يوم ، ويتأكدون من أن كل شيء يضعونه في أفواههم ليس مليئًا بالسكريات أو المواد الحافظة ، لكنهم لا يهتمون بصحتهم العقلية ، ولا إجازات ، ولا حتى بين الحين والآخر. عطلة نهاية أسبوع طويلة. كل هذا على أمل الحصول على هذا الترويج الكبير في يوم من الأيام.' : 'Today most people get on average 4 to 6 hours of exercise every day, and make sure that everything they put in their mouths is not filled with sugars or preservatives, but they pay no attention to their mental health, no vacations, not even the occasional long weekend. All of this for hopes of one day getting that big promotion' }}.
    </div>
    <div class="text color-666 mb-20">
      <template v-if="rtl">
        كوفنتري مدينة لها ألف عام من التاريخ ولديها الكثير لتقدمه للسائح الزائر. يقع في قلب وارويكشاير.
      </template>
      <template v-else>
        Coventry is a city with a thousand years of history that has plenty to offer the visiting tourist. <br /> Located in the heart of Warwickshire.
      </template>
    </div>
    <div class="info-imgs">
      <div class="row">
        <div class="col-lg-6">
          <div class="img text-center mt-30">
            <img src="/assets/img/blog/13.png" alt="" />
            <span class="color-999 fs-12px mt-20">{{ rtl ? 'الصور بواسطة' : 'Images by' }} <a href="#" class="color-000">{{ rtl ? '@مثال' : '@sample' }}</a> </span>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="img text-center mt-30">
            <img src="/assets/img/blog/14.png" alt="" />
            <span class="color-999 fs-12px mt-20">{{ rtl ? 'الصور بواسطة' : 'Images by' }} <a href="#" class="color-000">{{ rtl ? '@مثال' : '@sample' }}</a> </span>
          </div>
        </div>
      </div>
    </div>
    <div class="text mt-50 color-666">
      {{ rtl ? 'الإجابة القصيرة هي نعم. وفقًا لكروس ، عندما تفكر في نفسك كشخص آخر ، فهذا يسمح لك أن تمنح نفسك المزيد. نوتردام في نفس الهدف اللوريم ، ردود فعل مفيدة.' : 'The short answer is yes. According to Kross, when you think of yourself as another person, it allows you lorem ispum lorem suo give yourself more. Notre dame at sume lorem objective, helpful feedback.' }}
    </div>
    <div class="twitter-info mt-60">
      <div class="twitter-card">
        <div class="twitter-header d-flex align-items-center justify-content-between">
          <div class="twitter-user d-flex align-items-center">
            <div class="icon-50 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0">
              <img src="/assets/img/team/3.jpeg" alt="" />
            </div>
            <div class="inf">
              <h6 class="fw-bold">{{ rtl ? 'راسيل' : 'Russel B.' }}</h6>
              <small class="color-999"> @russelb  - 15 Dec, 2022 </small>
            </div>
          </div>
          <div class="twitter-icon">
            <i class="fab fa-twitter"></i>
          </div>
        </div>
        <div class="twitter-info mt-40">
          <h5>
            “{{ rtl ? 'فريق في' : 'The team at' }} <a href="#" :class="`color-blue${styleType}`">@iteckagency</a> {{ rtl ? 'هو مكرس بشكل لا يصدق ، وواسع المعرفة ، ومفيد. كان المنتج النهائي جميلًا ويستحق كل بنس. أوصي بشدة بموضوع Iteck WP.' : 'is incredibly dedicated, knowledgeable, and helpful. The finished product was beautiful, and worth every penny. I would absolutely recommend Iteck WP Theme.' }}”
          </h5>
        </div>
      </div>
      <h4>{{ rtl ? 'التقصير في اليقظة' : 'Defaulting to Mindfulness' }}</h4>
      <div class="text color-666 mt-30">
        {{ rtl ? 'Cray منقوشة ما بعد السخرية ، قامت Helvetica keffiyeh بتشكيل كارليس بانجو قبل بيعها كشك صور المدونة Marfa semio tics Truffaut. مدونة Moustache Schlitz المستوى التالي Williamsburg ، حقيبة حمل آلة كاتبة عميقة على شكل حرف V' : 'Cray post-ironic plaid, Helvetica keffiyeh tousled Carles banjo before they sold out blog photo booth Marfa semio tics Truffaut. Mustache Schlitz next level blog Williamsburg, deep v typewriter tote bag' }}
      </div>
      <ul class="ps-1 ps-lg-5 my-4 color-666 fs-14px lh-7">
        <li class="d-flex">
          <i class="bi bi-dot me-2 fs-3 lh-2 pt-1"></i>
          {{ rtl ? 'تلخص الروائية الويلزية سارة ووترز الأمر ببلاغة' : 'Welsh novelist Sarah Waters sums it up eloquently' }}
        </li>
        <li class="d-flex">
          <i class="bi bi-dot me-2 fs-3 lh-2 pt-1"></i>
          {{ rtl ? 'في كتابهم الكلاسيكي ، الإبداع في الأعمال ، استنادًا إلى دورة شائعة قاموا بتدريسها' : 'In their classic book, Creativity in Business, based on a popular course they co-taught' }}
        </li>
        <li class="d-flex">
          <i class="bi bi-dot me-2 fs-3 lh-2 pt-1"></i>
          {{ rtl ? 'الروائي وكاتب السيناريو ستيفن بريسفيلد' : 'Novelist and screenwriter Steven Pressfield' }}
        </li>
      </ul>
      <div class="text color-666 mt-30">
        {{ rtl ? 'هذا على الفور جلب إلى الأذهان واحد من' : 'That immediately brought to mind one of' }} <a href="#" :class="`text-decoration-underline color-blue${styleType}`">{{ rtl ? 'اعز' : 'my fondest' }}</a> {{ rtl ? 'ذكريات ، عن ابنتي عندما كانت مجرد طفلة صغيرة.' : 'memories, involving my daughter when she was just a toddler of one.' }}
      </div>

      <div class="blog-share mt-80">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="side-tags">
              <div class="content">
                <a href="#" class="me-1">{{ rtl ? 'ووردبريس' : 'WordPress' }}</a>
                <a href="#" class="me-1">{{ rtl ? 'بي أتش بي' : 'PHP' }}</a>
                <a href="#" class="me-1">HTML/CSS</a>
                <a href="#">{{ rtl ? 'فيجما' : 'Figma' }}</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="share-icons d-flex justify-content-lg-end mt-3 mt-lg-0">
              <h6 class="fw-bold me-3 flex-shrink-0 text-uppercase">
                {{ rtl ? 'مشاركة على' : 'Share on' }}
              </h6>
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-tumblr"></i>
              </a>
              <a href="#">
                <i class="fas fa-rss"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rtl', 'styleType']
}
</script>
