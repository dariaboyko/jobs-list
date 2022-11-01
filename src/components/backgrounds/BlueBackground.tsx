type Props = {
  children: React.ReactNode;
};

export const BlueBackground = ({ children }: Props) => (
  <main className="bg-blueBG">{children}</main>
);
