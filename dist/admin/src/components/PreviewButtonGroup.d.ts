import { IContentType } from '../hooks/useSettings';
interface PreviewButtonGroupProps {
    config: IContentType;
    document: Record<string, any>;
}
declare const PreviewButtonGroup: ({ config, document }: PreviewButtonGroupProps) => import("react/jsx-runtime").JSX.Element;
export { PreviewButtonGroup };
