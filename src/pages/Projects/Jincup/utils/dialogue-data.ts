interface IDialogue {
  id: number
  titleJp: string
  titleEn: string
  descJp: string
  descEn: string
}

export const dialogueData1: IDialogue[] = [
  {
    id: 1,
    titleJp: '村上',
    titleEn: 'YM',
    descJp:
      'ジンくんとタクくんから2024年春に新宿伊勢丹でジンカップの歴史展を開催するという話を聞いたときに、その場で未来のジンカップを作ろうという話を伝えました。 その当時、プロダクトサスティナビリティを標榜するanew inc.というプロジェクトを立ち上げたところで、過去から現在に至るジンカップが展示されるのであれば、未来のジンカップがあっても良いのではと発想が広がり、プロジェクトがスタートしました。',
    descEn:
      'When I heard about the idea of hosting a history exhibition of jincups at Isetan Shinjuku by Jin-kun and Taku-kun in spring 2024, I immediately suggested the idea of creating future jincups. At that time, we had just launched anew inc., a project advocating for product sustainability. If jincups from the past to the present are to be exhibited, it seems natural to think about future jincups. Thus, the project began.'
  },
  {
    id: 2,
    titleJp: 'ジン',
    titleEn: 'JA',
    descJp:
      '村上さんとは10年来のつながりで、村上さんがオーナーのBONDOというストアで作品を扱ってもらったのが最初です。 それ以来、悩んだときに壁打ちの相手になってもらったり、村上さんがブランドキュレーターを務めるブルーボトルコーヒーでのコラボレーションを実現したりと、さまざまな展開を進めてきました。 未来のジンカップというテーマをもらったときに、まず考えたのは、このままいくと100年後には今より木が減っているという現実です。',
    descEn:
      'I’ve had a connection with Murakami-san for ten years. The first time was when Murakami-san, as the owner of the store BONDO, started selling my products at his store. Since then, he has been someone I turn to for advice when I’m troubled. We’ve collaborated on projects at Blue Bottle Coffee, where Murakami-san serves as a brand curator. When I was given the theme of future jincups, the first thing I thought about was the reality that if things continued as they were, there would be fewer trees in a hundred years.'
  },
  {
    id: 3,
    titleJp: '村上',
    titleEn: 'YM',
    descJp:
      'anew inc.でも 「私たちはいかにしてよき祖先となれるか」 という未来から振り返る観点で、100年1000年単位で想像して、まずは身の回りのプロダクトを通してサスティナブルな豊かさを作っていけないかと考えています。',
    descEn:
      'At anew inc., we consider how we can become good ancestors from the perspective of looking back from the future, imagining on a scale of hundreds or thousands of years. We are considering creating sustainable richness through everyday products.'
  },
  {
    id: 4,
    titleJp: 'ジン',
    titleEn: 'JA',
    descJp:
      'そもそも僕は司馬遼太郎の小説がすごく好きで、歴史マニアなんです。 司馬遼太郎は面白い物語を作るためにこだわって、何百年と歴史を遡っていく。 その視点が沁み込んでいるので、100年経つとどうだろうという考えが自分にとっては自然に出てくる。 自分の人生を考える場合でも、90歳の葛飾北斎が死の間際に「あと10年、あと５年寿命があれば真の画工となれたのに」との言葉を残したという有名なエピソードに影響を受けて、僕も80歳には超一流の入口に立つんだと決めました。 そこから逆算して考えているので、まだまだひよっこという感覚。 それくらいの長いスパンでものを見る癖がある。 ジンカップについてもこれまでは初期段階、これからようやく前期が始まるくらいの時間軸で未来を考えています。 半年先のことはどうなるかわからないけれど、100年先のセンターピンはどこかというのは考えられると思うんです。',
    descEn:
      'I’ve always been a fan of Ryotaro Shiba’s novels and history. He delves into history for the sake of creating interesting stories, tracing back hundreds of years. His perspective has influenced me to naturally consider what things will be like a hundred years from now. Even when I think about my own life, I’m influenced by the famous episode where the 90-year-old Katsushika Hokusai, on his deathbed, regretted not having another ten or five years to become a true artist. From there, I decided that I would stand at the entrance to true excellence at 80. So, I’m thinking backwards from there, still feeling like a novice. I have a habit of looking at things with such a long span. Regarding jincups, I’ve been thinking about the future in terms of early stages so far, as if the present is just beginning. I may not know what will happen six months from now, but I believe it’s possible to consider where the center pin will be in a hundred years.'
  }
]

export const dialogueData2: IDialogue[] = [
  {
    id: 5,
    titleJp: '村上',
    titleEn: 'YM',
    descJp:
      '今回は土に埋めると数ヶ月で分解される、生分解性のバイオマスプラスチック素材を使うことを決めて、手探りで形になる方法を試行錯誤してきたけれど、どうだった？',
    descEn:
      'This time, we decided to use biodegradable biomass plastic material that decomposes in a few months when buried in the soil. We’ve been experimenting with trial and error to find ways to shape them. What did you think about this new challenge?'
  },
  {
    id: 6,
    titleJp: 'ジン',
    titleEn: 'JA',
    descJp:
      'まず僕は作家として、そしてデザイナーとして、僕が作ったものが社会の役に立つようにしたいという欲望があって、制作意欲には逆らえないけれど、自分のわがままだけでものを作るのはあまり気持ちよくない。 なかでも日本の工房をパートナーとして、職人を育てる仕組みを作ったジョージ・ナカシマの方法論が好きで、デザインが資産になることへの憧れがあるんです。 日本は石油が採れるわけでもなく資源に乏しい国だけど、製造業が錬金術となって日本の資産になっている。 ジンカップというコンテンツもそうやって運用して、海外に出ていき、日本の資産のひとつとして活力を生み出すのが使命だと思う。 だからコロナや地震という大きな問題が発生しても、僕は 「日本の製造業が元気でいられるように、工房でものを作らないと！」 って発想になる。 そのひとつとして、環境問題がどんどんリアルになっていくとき、僕が関わるなら、プラスチックを否定するのではなく、プラスチックの恩恵にあずかりたいからこそ持続可能なバイオマスプラを発展させると考える方が自然。 「プラスチック反対！」 という人と 「新しいプラスチック面白いよね！」 という人が100人集まったら、力の方向性がまったく違っていて、後者の方が僕は好きなんです。 ものを作らない人と作る人なら、僕は作る側の発想で、肯定することで何ができるかを考えてみたいと思っています。',
    descEn:
      'As an artist and designer, I have a desire to make things useful to society. I can’t resist the urge to create things as I desire, but it doesn’t feel good to create something just for my own whims. Among various methodologies, I particularly like the approach of George Nakashima, who created a system for nurturing craftsmen as partners in Japanese workshops, and I aspire to have design become an asset. Japan is a resource-poor country where we can’t extract oil, yet the manufacturing industry has become alchemy and a national asset. I think it’s our mission to operate content like jincups in the same way, creating vitality as one of Japan’s assets as it goes overseas. Therefore, even when major problems like COVID-19 or earthquakes occur, I think, “We need to keep the manufacturing industry in Japan healthy and keep making things in the workshop!” When it comes to environmental issues becoming more and more real, if I’m involved, it feels more natural to develop sustainable biomass plastics to benefit from the blessings of plastics rather than to oppose them outright. When a hundred people gather, with some saying “NO to plastics!” and others saying “New plastics are interesting!” their directions of energy are completely different, and I prefer the latter. If there are people who don’t make things and those who do, I tend to think from the perspective of those who do, considering what can be achieved by affirming.'
  },
  {
    id: 7,
    titleJp: '村上',
    titleEn: 'YM',
    descJp:
      '新しい素材って、本当にワクワクするし面白いよね。 大きな社会の流れもあるけれど、単純なワクワク感自体がモチベーションになる。 anew inc.のフィロソフィーは 「矛盾を楽しむ」 。 たとえば新しいものを生み出したい原動力と環境負荷との矛盾を、どうポジティブに超えていくか。 最初は 「矛盾を乗り越える」 と言っていたんだけど、それだと排除する要素があると感じて、楽しむという表現に変えた。 自分の感覚として、社会が変わっていくには使命感も大事だけど、ポジティブなエネルギーがないとドライブしないというのがある。 だから楽しさやかっこよさといった、感情の動きを大切にしたい。 feel firstで共感を生んで、仲間を増やしていく。',
    descEn:
      'New materials are really exciting and interesting, aren’t they? There are big social trends, but the simple excitement itself can be motivating. The philosophy of anew inc. is to “enjoy contradictions.” For example, how can we positively overcome the contradiction between the desire to create something new and the environmental impact? Initially, we said “overcome contradictions,” but I felt that it implied exclusion, so I changed it to “enjoy,” because I think positive energy is necessary for driving change in society. So, I want to cherish emotions such as enjoyment and coolness. By generating empathy through “feel first,” we can increase our allies.'
  },
  {
    id: 8,
    titleJp: 'ジン',
    titleEn: 'JA',
    descJp:
      '僕は木という太古からある素材とずっと向き合ってきたので、新しい素材と出会ったときに何がやれるかを、あえて情報を入れずに、まずは自分の手で触って加工して、体感で理解していきたい。 セラミックでジンカップをやるときも、釉薬を作るのに嬉々として楽しんでいる。 今回は、一度バイオマスプラスチックの原料自体を鹿児島に送ってもらい、一部を自分で鍋で溶かしてジンカップセラミックの石膏型に流し込めないかという方法も試してみました。 ただ粘度が高く、より高温にすると先に焦げてしまうため、うまくいかず断念しました。 でも、そうやって自分の手で初めての材料を扱ってみることで、いろいろなことが体感でわかったのが大きかった。 時代時代で残っているデザインって、そのときの社会に合った技術や素材で作られていることが多くて、それがものづくりの本質だと思うんです。 1930年代に成型合板を使ったプルーヴェのスタンダードチェア、1950年代にファイバーグラスを使ったイームズのシェルチェアもそう。 だからいまバイオマスの素材に関われるのが楽しいですね。',
    descEn:
      'Since I’ve been dealing with wood, a material that has been around since ancient times, when I encounter new materials, I want to see what I can do with them without deliberately filling myself with information. I want to understand them through hands-on processing and sensory experience. Even when I do jincups with ceramics, I enjoy making glazes. This time, I tried sending biomass plastic raw materials to Kagoshima, melting some by myself, and pouring them into the plaster molds for Jin Cups. However, the viscosity was high, and it burned when heated to a higher temperature, so it didn’t work out well, and I gave up. But by handling a new material for the first time in this way, I gained a lot of understanding through experience. Designs that survive through the ages are often made with technologies and materials suitable for the society of that time, and I think that’s the essence of craftsmanship. Like the Standard Chair by Pluvue, which used molded plywood in the 1930s, and the Shell Chair by Eames, which used fiberglass in the 1950s. So, I’m having fun being involved with biomass materials now.'
  }
]

export const dialogueData3: IDialogue[] = [
  {
    id: 9,
    titleJp: '村上',
    titleEn: 'YM',
    descJp:
      'プロダクトの歴史を振り返ると、環境問題が明るみに出るまでの束の間、大量生産大量消費が豊かさの象徴で、単純に明るい未来を夢見れていた時代があったと思うんです。 公害問題が浮き彫りになってからは、大きく逆転して大量生産大量消費は悪であるということが常識となる世の中にきていますが、素材を考え直すことで、モノづくりで夢を見れる領域を取り戻したい。 土に還る生分解性プラスチックをはじめとして、さまざまな人間の叡智が込められた新素材を使って、モノづくりを明るくしたい。',
    descEn:
      'Looking back at the history of products, there was a time when mass production and consumption were symbols of prosperity, until environmental issues came to light, and mass production and consumption were widely recognized as evils. By rethinking materials, I want to reclaim the realm where dreams can be realized through craftsmanship. Using new materials such as biodegradable plastics that return to the soil, various human wisdom is used to make products brighter.'
  },
  {
    id: 10,
    titleJp: 'ジン',
    titleEn: 'JA',
    descJp:
      'そこに共感しつつですが、ひとつ正直な観点として、かといって土に還るのは本当に必要なのかというのは常に議論しないといけないと思うんです。 長い目で見たときに、そうなる未来が良いのは違いない。 だけどすべてが分解される素材になると、今の時点では現実的には劣化すると都合が悪いものも多い。 だから、人間という種族で大きく向かっていく一歩な気がする。 まだそういうフェーズなので、楽しむことだと思います。 楽しんで仲間を巻き込んでいくことが大事だと思う。 元気玉みたいに使うことで、結果的に未来を目指す仲間が集まることになると思う。 そのなかで何ができるか。 こうやって新しい取り組みを楽しむ波がいろいろ合わさることで、大きな波になっていくのかなって。 僕はそれくらいの考えで始めています。',
    descEn:
      'While I empathize with that, to be honest, one viewpoint that always needs to be discussed is whether it’s really necessary for things to return to the soil. In the long run, a future where that happens is undoubtedly good. However, at this point, many materials that degrade are inconvenient practically because they deteriorate. So, I think it’s a big step forward for the human race. We’re still in that phase, so I think it’s about having fun. I think it’s important to enjoy it and involve others. By using it like a Spirit Bomb (From manga “Dragon Ball,” Spirit Bomb is a martial arts discipline that allows you to borrow energy from nature, people, and inanimate objects), I think it will attract allies aiming for the future as a result. What can be done within that? By combining various waves of enjoyment in new initiatives, I think it will become a big wave. That’s how I’m starting to think.'
  },
  {
    id: 11,
    titleJp: '村上',
    titleEn: 'YM',
    descJp:
      'ジンくんから受ける気づきは、anew inc.にとってもすごく大きくて影響を受けています。 個人としての豊かさからスタートして、影響を響かせ合うことで、川の流れのようにコミュニティが広がり、社会の課題を超えられるような活動を続けていきたいですね。',
    descEn:
      'The insights I get from Jin-kun have a huge impact on anew inc. Starting from individual richness and spreading influence, we want to continue activities that expand the community like the flow of a river, overcoming societal issues.'
  },
  {
    id: 12,
    titleJp: 'ジン',
    titleEn: 'JA',
    descJp:
      'そういえば余談ですが、先日、僕が通っていた小学校の隣の公民館に出展するイベントがあって、懐かしくふと思い出したことがあったんです。 それは薩摩藩の教育のベースとなっている日新公いろは歌と言う和歌集の「い」の一番。 「いにしえの道を聞きても唱えても、我が行いにせずばかいなし」 という和歌。 古い本で学ぶことはとても大事だが、学びを自分の行動に変えないといけませんよ （＝インプットしたらアウトプットしなさい） って意味で、自分の信条はここだと改めて感じたんです。 小学生の頃から口ずさめるようになっていて、まんまと教育されていたんだなって。 歴史が好きでそこから学びながらも、未来に向けてアウトプットし続ける姿勢。 本当に 「せずばかいなしだよなー」 と思っています。',
    descEn:
      'By the way, the other day, there was an event at the community center next to the elementary school I used to attend, and it brought back nostalgic memories. It reminded me of the first verse of the “I” section of the Nisshin Public Iroha Song, which forms the basis of education in the Satsuma domain. The verse goes, “Even if we listen and recite the ancient path, it’s pointless if we don’t act upon it.” Learning from old books is crucial, but it’s equally important to translate that learning into action (i.e., input without output is meaningless). It reaffirmed to me that this is my creed. Since elementary school, I’ve been able to hum it, realizing I had been taught it without even realizing. I love history and continue to learn from it, but I maintain an attitude of outputting towards the future. I genuinely believe in the significance of “no action, no gain.”'
  }
]
