import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import swc from '@rollup/plugin-swc';
import { minify } from 'uglify-js';

function minifyCode() {
    return {
        name: 'rollup-plugin-minify', // this name will show up in logs and errors
        renderChunk(code) {
            const result = minify(code, {
                toplevel: true,
                compress: {
                    passes: 1,
                    module: true
                },
                output: {
                    beautify: false
                },
                module: true,
                mangle: true,
                sourceMap: true
            });
            if (result.warnings) {
                console.warn(result.warnings); 
                return null;
            }
            return {
                code: result.code,
                map: result.map
            }
        }
    };
}

export default {
    input: 'src/index.ts',
    output: {
        dir: 'lib',
        format: 'es',
        compact: true,
        sourcemap: true
    },
    watch: {
        include: ['./src/**/*']
    },
    plugins: [
        swc(),
        nodeResolve({
            exportConditions: ["default", "import"],
            preferBuiltins: true,
            extensions: ['.ts','.js','.mjs','.cjs','.json']
        }),
        commonjs(),
        minifyCode()
    ]
};