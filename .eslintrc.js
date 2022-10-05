module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: '2021',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            '@typescript-eslint/parser': ['.ts'],
            node: {
                extensions: ['.ts', '.tsx', '.js', '.jsx'],
            },
        },
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    rules: {
        'react/prop-types': 0,
        'no-extra-semi': 'error', // 확장자로 js와 jsx 둘다 허용하도록 수정
        'react/jsx-filename-extension': [
            1,
            { extensions: ['js', 'jsx', 'ts', 'tsx'] },
        ],
        'arrow-parens': ['warn', 'as-needed'], // 사용하지 않는 변수가 있을때 빌드에러가 나던 규칙 해제
        'no-unused-vars': ['off'], // 콘솔을 쓰면 에러가 나던 규칙 해제
        'no-console': ['off'], // export const 문을 쓸때 에러를 내는 규칙 해제
        'import/prefer-default-export': ['off'], // hooks의 의존성배열이 충분하지 않을때 강제로 의존성을 추가하는 규칙을 완화
        'react-hooks/exhaustive-deps': ['warn'], // props spreading을 허용하지 않는 규칙 해제
        'react/jsx-props-no-spreading': [1, { custom: 'ignore' }],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/no-var-requires': 'off',
    },
};
