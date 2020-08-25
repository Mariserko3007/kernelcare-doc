(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{402:function(_,e,t){"use strict";t.r(e);var v=t(32),r=Object(v.a)({},function(){var _=this,e=_.$createElement,t=_._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"設定オプション"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#設定オプション","aria-hidden":"true"}},[_._v("#")]),_._v(" 設定オプション")]),_._v(" "),t("p",[_._v("kcarectlの動作は "),t("code",[_._v("/etc/sysconfig/kcare/kcare.conf")]),_._v(" を使用し、設定できます。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th"),_._v(" "),t("th")])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("AUTO_UPDATE=True|False")])]),_._v(" "),t("td",[t("code",[_._v("True")]),_._v(" - 自動更新を有効化; "),t("code",[_._v("False")]),_._v(" - 自動更新を無効化")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("chkconfig kcare off")])]),_._v(" "),t("td",[_._v("restart 後に自動更新を無効化")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("PATCH_METHOD=normal|nofreeze|smart")])]),_._v(" "),t("td",[t("code",[_._v("Normal")]),_._v(" - (デフォルト) freezer を使用;"),t("br"),t("code",[_._v("Nofreeze")]),_._v(" - プロセスをフリーズすることのために freezer を使用しない;"),t("br"),_._v(" "),t("code",[_._v("Smart")]),_._v(" - smart freezerは、パッチ適用のためにフリーズする必要のあるスレッドのみをフリーズ(kernelcare ver2.3以降)")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("PATCH_SERVER")])]),_._v(" "),t("td",[_._v("パッチをダウンロードするために使用するサーバ")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("REGISTRATION_URL")])]),_._v(" "),t("td",[_._v("ライセンスされるサーバ")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("PREFIX=prefix")])]),_._v(" "),t("td",[_._v("パッチソースのプレフィックスで、プレフィックスベースで異なるロケーションからダウンロードすることによって、異なるビルドをテストするために使用（ver2.2以降）")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("UPDATE_POLICY=REMOTE|LOCAL|LOCAL_FIRST [ver1.6以降]")])]),_._v(" "),t("td",[_._v("ポリシーに従い、サーバの起動時に次のコマンドを実行。:"),t("br"),t("code",[_._v("REMOTE")]),_._v(" - (デフォルト) パッチサーバからパッチを取得"),t("br"),t("code",[_._v("LOCAL")]),_._v(" - ローカルにキャッシュされたパッチのみ取得。何もキャッシュされていない場合、何も行いません (キャッシュは自動的に実行)"),t("br"),t("code",[_._v("LOCAL_FIRST")]),_._v(" - ローカルにキャッシュされたパッチが存在するかどうかを確認し、それらを取得。そうでない場合、リモートサーバから取得。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("IGNORE_UNKNOWN_KERNEL=True|False")]),_._v(" "),t("code",[_._v("[ver2.5-4以降]")])]),_._v(" "),t("td",[_._v("自動更新時にカーネルが不明の場合、通知を実行しない")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("LOAD_KCARE_SYSCTL [ver2.7-1以降]")])]),_._v(" "),t("td",[t("code",[_._v("/etc/sysconfig/kcare/sysctl.conf")]),_._v(" はパッチセットロード時に実行するかどうかをコントロールします。デフォルトでは True となっています。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("--set-patch-type extra")])]),_._v(" "),t("td",[_._v("追加のパッチを有効化")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("--set-patch-type free")])]),_._v(" "),t("td",[_._v("無料のパッチを有効化")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("STICKY_PATCH=KEY")])]),_._v(" "),t("td",[t("code",[_._v("KEY")]),_._v(" からスティッキーパッチを取得(CLN、Key 編集を参照); IPベースのサーバまたはePortalではサポートされていません。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("STICKY_PATCH=DDMMYY")])]),_._v(" "),t("td",[_._v("特定の日付でのパッチを充てます。詳細情報は "),t("RouterLink",{attrs:{to:"/jp/sticky-patches/"}},[_._v("Stickyパッチ")]),_._v(" を参照ください。")],1)]),_._v(" "),t("tr",[t("td",[t("code",[_._v("REPORT_FQDN=True|False")])]),_._v(" "),t("td",[_._v("ホスト名として完全に認定されたドメイン（Fully Qualified Domain）を使用する必要があります。デフォルトでは　False となっています。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("FORCE_GID=N")])]),_._v(" "),t("td",[_._v("シンボリックリンクの保護パッチに、このグループIDを使用。デフォルトでは48（デフォルトのApacheユーザ GID）もしくは99（ "),t("code",[_._v("nobody")]),_._v(" ユーザ）となっています。)")])])])])])},[],!1,null,null,null);e.default=r.exports}}]);