# OKINAWA 新車正規ディーラーズ中古車フェア LP

支給チラシをもとにした、2026年11月7日・8日開催のフェアの確認用初稿です。
ポートフォリオ掲載不可。公開前にクライアントの内容確認と正式素材への差し替えをお願いします。

## 確認・納品

`index.html` をブラウザーで開くと確認できます。ビルドや npm install は不要です。
サーバーで確認する場合は、このディレクトリで `python -m http.server 8765` を実行します。

納品対象は `index.html`、`styles.css`、`script.js`、`assets/` です。
すべて同じフォルダー構成でアップロードしてください。ドメイン直下・サブフォルダーのどちらでも動く相対パスです。
ディーラーの公式サイト、Googleマップ、電話リンクは外部リンクのため、それぞれのURLを使用しています。

## 7構成

1. 開催概要：チラシのメインビジュアル、日時、会場
2. 品揃え：出品400台と沖縄のドライブをイメージした追加イラスト
3. 安心：認定中古車、総額表示、アフターサービス
4. イベント：スタンプラリー、キッチンカー、JAFちびっこ免許証、ご成約特典
5. 参加ディーラー：10社の公式サイトへのリンク
6. 会場アクセス：地図、無料駐車場600台、Googleマップへのリンク
7. 来場案内：開催情報の再掲、チラシPDFへのリンク

## ご用意いただきたいもの

- **正式な正方形の地図画像**：現在は `cd-wf-link.pdf` の3ページ目に埋め込まれた画像を抽出し、仮使用しています（759×536px）。切り取りや地図の生成は行っていません。支給後に `assets/access-map.webp` を差し替え、HTML内の画像寸法も変更してください。
- **Illustratorファイルとリンク画像**：現在はチラシPDFから画像を作成しています。AIファイルがなくても初稿確認は可能ですが、細部の調整に使用します。
- **掲載内容の最終確認**：開催日・会場・400台・特典内容・事務局電話番号。チラシにない特典の金額、入場料、予約の要否、雨天対応などは加えていません。
- **ディーラーの指定リンク先**：公式サイトを調査して設定しています。ヤナセ九州はメルセデス・ベンツ沖縄の案内ページ、モトーレン沖縄はOkinawa BMWにリンクしています。指定がある場合は差し替えてください。

## 素材

| ファイル | 出典・用途 |
| --- | --- |
| assets/hero-flyer.webp | 支給 `26_A4チラシ_10.pdf` 上部のメインビジュアルを画像として書き出し |
| assets/flyer.webp | 同PDFの全体プレビュー |
| assets/flyer.pdf | 同PDFのコピー。来場者向けチラシリンク |
| assets/access-map.webp | 要望PDF3ページ目の地図画像。正式素材の支給待ち |
| assets/okinawa-drive.webp | 内蔵画像生成ツールで新規生成したイラスト。販売車両・実会場の写真ではなく、その旨を表示 |
| assets/favicon.svg | このLP用の汎用車アイコン |

イベントの小さな図解はHTML/CSSとSVGで作成しています。外部の写真やディーラーロゴの転載はしていません。
文字・リンク・日時はHTML、配色や余白はCSSで編集可能です。チラシ由来の画像内文字は元データの変更が必要です。

### 追加画像の生成プロンプト

使用ツール：内蔵 image_gen（CLI/APIキー不要）。生成画像はWebPに圧縮して同梱。

> Use case: illustration-story. Asset type: wide decorative illustration for a Japanese Okinawa official-dealer used car fair landing page. Create a premium joyful editorial 3D clay and paper craft illustration, landscape 3:2 composition. Three generic unbranded cars (a small coral-red compact in foreground, an ivory compact SUV, and a sky-blue boxy kei car) parked on a sunlit pale sand-colored curved road, turquoise Okinawa sea behind them, stylized lush tropical palms framing sides, soft fluffy white clouds and a few subtle golden confetti shapes. Sophisticated clean art direction, friendly rounded forms, realistic soft shadows, crisp details, cobalt and turquoise blue with warm yellow accents. No humans, no lettering, no text, no logos, no manufacturer emblems, no watermark. Cars must look like illustrative generic models, not recognizable branded vehicles. Balanced composition, uncluttered, polished advertising quality. This image is illustrative atmosphere, not event photography.

## 検証

Edge（Chromium）のブラウザー検証：320 / 390 / 768 / 1366 / 1920px幅。
横スクロール、画像読み込みエラー、JavaScriptエラー、存在しないページ内リンクがないことを確認。
1366×768pxで開催情報バーが最初の画面内に収まることを確認。
スマホ向け地図拡大案内と固定アクセスボタン、JavaScript無効時の主要情報表示を確認。
ズームを制限するviewport指定・ピンチ操作の抑止は行っていません。
実機Safari/Chromeでのピンチ操作は公開前確認を推奨します。

## リンク確認元（2026-10-06）

- 沖縄トヨタ自動車：https://www.okinawa-toyota.co.jp/
- 沖縄ホンダ：https://www.okinawa-honda.com/
- 沖縄マツダ販売：https://okinawa-mazda.jp/news/tour-de-okinawa/
- スズキ自販沖縄：https://www.suzuki.co.jp/dealer/sj-okinawa/
- スバル九州 沖縄：https://kyushu-subaru.jp/okinawa/
- 琉球ダイハツ販売：https://www.ryukyu-daihatsu.co.jp/
- 琉球日産自動車：https://ni-ryukyu.nissan-dealer.jp/top.html
- 琉球三菱自動車販売：https://www.ryukyu-mitsubishi.co.jp/
- ヤナセ沖縄：https://www.yanase.co.jp/mercedes-benz/store/011401/info/
- モトーレン沖縄：https://okinawa.bmw.jp/ja/about_us
