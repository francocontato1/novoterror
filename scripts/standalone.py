# Gera dist/PontoCego.html: o jogo inteiro num único arquivo (abre direto no navegador, sem servidor).
import base64, glob, json, os, re
D = 'dist'
html = open(f'{D}/index.html').read()
css = open(glob.glob(f'{D}/assets/index-*.css')[0]).read()
js = open(glob.glob(f'{D}/assets/index-*.js')[0]).read().replace('</script', '<\\/script')
uri = lambda f: 'data:image/jpeg;base64,' + base64.b64encode(open(f, 'rb').read()).decode()
files, models = {}, {}
for f in glob.glob(f'{D}/assets/tex/*/*.jpg') + glob.glob(f'{D}/assets/human/*.jpg') + glob.glob(f'{D}/assets/hdr/*.jpg') + glob.glob(f'{D}/assets/sfx/*.mp3'):
    files[f[len(D) + 8:]] = uri(f).replace('image/jpeg', 'audio/mpeg') if f.endswith('.mp3') else uri(f)
for f in glob.glob(f'{D}/assets/models/*/*.json') + glob.glob(f'{D}/assets/human/*.json'):
    j = json.load(open(f)); d = os.path.dirname(f)
    for im in j.get('images', []):
        if 'uri' in im and not im['uri'].startswith('data:'): im['uri'] = uri(os.path.join(d, im['uri']))
    models[f[len(D) + 8:]] = json.dumps(j, separators=(',', ':'))
emb = json.dumps({'files': files, 'models': models}, separators=(',', ':')).replace('</', '<\\/')
head = re.search(r'<head>(.*?)</head>', html, re.S).group(1)
head = re.sub(r'<script type="module"[^>]*></script>\s*', '', head); head = re.sub(r'<link rel="stylesheet"[^>]*assets[^>]*>\s*', '', head)
body = re.sub(r'<script type="module"[^>]*></script>', '', re.search(r'<body>(.*?)</body>', html, re.S).group(1))
out = f'<!doctype html>\n<html lang="pt-BR">\n<head>{head}<style>{css}</style></head>\n<body>{body}\n<script>window.__EMBED={emb};</script>\n<script type="module">{js}</script>\n</body>\n</html>\n'
open(f'{D}/PontoCego.html', 'w').write(out)
print(f'{D}/PontoCego.html', round(len(out) / 1e6, 1), 'MB')
