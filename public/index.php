<?php
$routes = $_SERVER['REQUEST_URI'];
switch($routes) {
    case '/projects/jincup-anew':
        $title = "jincup anew ｜ PROJECTS ｜ anew inc.";
        $description = "未来のジンカップを考える。jincup anewは、土壌に埋めると約3ヶ月で分解されて土に還るジンカップのプロトタイプです。横河バイオフロンティアが取り扱うVASUジャパンの生分解性プラスチック原料をニッシリにてブロック状に成形し、鹿児島に届けてアキヒロジンが手彫りするというプロセスで生まれました。";
        $url = (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        $ogImage = (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]/ogp_jincup.jpg";
        break;
    default :
        $title = "anew inc. ｜ アニュウインク";
        $description = "anew inc.はプロダクトサステナビリティの観点から「私たちはいかにしてよき祖先となれるか」というグッドアンセスターとしての可能性を追求するプロジェクトチームです。";
        $url = (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        $ogImage = (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]/ogp.jpg";
        break;
}
?>
<!doctype html>
<html lang="ja">

<head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#33392E" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />

    <meta name='title' content='<?=$title?>' />
    <meta name='description' content='<?=$description?>' />

    <meta property='og:url' content='<?=$url?>' />
    <meta property='og:title' content='<?=$title?>' />
    <meta property='og:site_name' content='<?=$title?>' />
    <meta property='og:description'content='<?=$description?>' />
    <meta property='og:image' content='<?=$ogImage?>' />

    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:site' content='<?=$title?>' />
    <meta name='twitter:title' content='<?=$title?>' />
    <meta name='twitter:description' content='<?=$description?>'/>
    <meta name='twitter:image:src' content='<?=$ogImage?>' />

    <?php if ($routes == '/projects/jincup-anew') : ?>
    <script>
        (function (d) {
        var config = {
            kitId: 'sbn4zvv',
            scriptTimeout: 3000,
            async: true
        },
            h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
        })(document);
    </script>
    <?php endif; ?>

    <script defer="defer" src="/static/js/main.ec12deff.js"></script>
    <link href="/static/css/main.88423402.css" rel="stylesheet">

    <title><?=$title?></title>
</head>

<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
</body>

</html>  