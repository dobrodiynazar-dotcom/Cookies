type ActionLinkProps = {
  href: string | null;
  label: string;
  className?: string;
  fallbackHref?: string;
};

export function ActionLink({
  href,
  label,
  className = "button button--primary",
  fallbackHref = "#order",
}: ActionLinkProps) {
  return (
    <a className={className} href={href ?? fallbackHref}>
      <span>{label}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
