import { styled } from 'styled-components';

export const TextButton = styled.button`
  color: #f0b322;
  border: none;

  & {
    color: #f0b322;
    border: none;
  }

  &:hover {
    color: #f0920e;
  }
`

export function FilledButton({ children, ...props }) {
    return <button {...props} className="px-4 py-2 font-semibold uppercase rounded-2xl text-stone-900 bg-amber-400 hover:bg-amber-500">
        {children}
    </button>
}