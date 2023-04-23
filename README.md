# 議事録要約プログラム &#x1f916;

ChatGPT及びNode.jsを使用した議事録要約プログラムです。<br>
テキストファイルの要約を別ファイルで出力できます。<br>

* inputファイルは基本的にテキスト形式のファイルを想定しています。
* リクエストの際に、入力と出力合わせた上限が4096トークン
  - 日本語での要約元ファイルのテキスト文字列上限は2500文字くらい
  - 上限を超えるとAPIリクエストははじかれます
* `.env` の`YOUR_OPENAIAPI_KEY`に登録したAPIKeyを入力して使用してください
  - `YOUR_OPENAIAPI_KEY`という環境変数を設定しても良さそうです
  - [OPENAI_APIキーの取得について参考](https://zenn.dev/umi_mori/books/chatbot-chatgpt/viewer/how_to_use_openai_api)

## インストール方法

1. リポジトリのクローン
```
git clone https://github.com/glkt3912/summary-openai.git
```
2. リポジトリのディレクトリへ移動
```
cd summary-openai
```
3. 使用パッケージのインストール
```
npm install
```

## 使用方法

1. 要約したい議事録のファイルパスを入力します。
2. `npm run summary`コマンドを実行します。
```
npm run summary
```
3. 議事録が要約され、outputディレクトリにMarkdown形式で出力されます。

## 注意事項
* GPT-3.5-turboモデルを使用しているため、OpenAIのAPIキーが必要です。
* APIキーを取得し、.envファイルに設定してください。
* このシステムは、Node.jsで動作するため、Node.jsがインストールされている必要があります。
