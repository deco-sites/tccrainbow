interface Props {
  /**
  * @description The description of name.
  */
  texto?: string;
}

export default function Section({ texto = "Capy" }: Props) {
  return <div class="flex flex-col">
    <div>
    {"Proposta"}
    </div>
    <div>
      {texto}
    </div>
  </div>
}