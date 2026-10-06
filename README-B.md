# 比較用 B案

A案：`index.html`（変更せず保存）。B案：`variant-b.html`。
どちらも同じフォルダー内の相対パスで動きます。

B案のPCは、左45%の文章と右55%の車の画像を軸にしています。
FV、無料駐車場・成約特典の情報帯、3つの案内リンク、400台から選ぶ楽しさ、家族向けイベント、購入の安心の順に掲載。
スマホのFVはA案と同じSP画像・開催日時と会場・チラシの構成です。

1366×768pxでPCのイベント名・400台・日時・会場が初期画面内に収まること、320/390/768/1366/1920px幅で横はみ出し・画像切れ・JSエラー・ページ内リンク切れがないことを確認しました。

`assets/cars-lineup-b.webp` は内蔵 image_gen で生成したイメージイラストです。実際の出品車両ではない旨を画像直下に明記。正式な出展車両写真が支給された場合は差し替え可能です。画像をWebPに圧縮して同梱しています。

生成プロンプト：

Create a landscape 3:2 premium polished 3D editorial illustration for an Okinawa used car fair landing page, no text, no logos. Cars are the clear main subjects and occupy 75 percent of image. Four different generic unbranded Japanese-style vehicles with clearly distinct silhouettes: a coral compact hatchback as main car foreground left fully visible, behind it an ivory SUV taller muscular body, at right a navy family minivan long tall body, and a sky blue small boxy kei car. Each complete car visible, natural perspective, wheels and bodies clearly rendered with no overlap hiding the silhouettes. All parked on light sandy paved ground. A narrow turquoise sea horizon and beautiful blue sky in the background, subtle tropical greenery confined to far edges. Camera three quarter front view, slightly elevated, commercial automotive composition. Bright clean daylight, saturated beautiful paint colors, gentle contact shadows. No people, no lettering, no logos or badges, no actual event signs, no balloons in front of cars. Generic illustrative vehicles not specific branded models. Keep cars within generous 5 percent safe margins.
