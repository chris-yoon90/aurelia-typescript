import path from 'path';

const PROJ_ROOT = path.resolve(__dirname, '..');

export default {
    src: path.join(PROJ_ROOT, 'src'),
    assets: path.join(PROJ_ROOT, 'assets'),
    dest: path.join(PROJ_ROOT, 'dist'),
    index: path.join(PROJ_ROOT, 'index.html'),
    html: path.join(PROJ_ROOT, 'src', '**/*.html'),
    ts: path.join(PROJ_ROOT, 'src', '**/*.ts'),
    css: path.join(PROJ_ROOT, 'assets', 'scss', '**/*.scss'),
    dts: [
        path.join(PROJ_ROOT, 'jspm_packages', '**/*.d.ts')
    ]
};