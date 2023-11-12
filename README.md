# grit.io try

https://www.grit.io/

- ClassComponent to FunctionComponent


## note
- やっていることは、単純にgrepして置き換えているだけ（今回試した[react_to_hooksのソース](https://github.com/getgrit/js/blob/main/.grit/patterns/react_to_hooks.md)）
- flux版は今はないが簡単に作れそうではある
- [ソースコードを収集することはないが、gritに対して実行内容等を送信している](https://docs.grit.io/getting-started/cli-quickstart#telemetry)
- 環境変数で`GRIT_TELEMETRY_DISABLED`を`true`にするとgritに対して何も通信しなくなる
- 実際`grit apply react_to_hooks`で変換されたコードはそのまま使えないが、元の書き方次第で相性の良し悪しがありそう
- 現状の立ち位置的には便利な置き換えライブラリ的な感じ