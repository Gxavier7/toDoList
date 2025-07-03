import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react"
import CheckIcon from "../assets/icons/check.svg?react"
import PencilIcon from "../assets/icons/pencil.svg?react"
import PlusIcon from "../assets/icons/plus.svg?react"
import SpinnerIcon from "../assets/icons/spinner.svg?react"
import XIcon from "../assets/icons/x.svg?react"
import Icon from "../components/icon";
import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import InputText from "../components/input-text";
import InputCheckbox from "../components/input-checkbox";
import Card from "../components/card";
import Container from "../components/container";
import Skeleton from "../components/skeleton";

export default function PageComponents () {
  return (
    <Container>
      <div className="grid gap-3">
        <div className="flex flex-col gap-1">
          <Text as="div" variant="body-sm-bold">
            Olá mundo
          </Text>
        </div>

        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-green-base"/>
          <Icon svg={CheckIcon} className="fill-green-base"/>
          <Icon svg={PencilIcon} className="fill-green-base"/>
          <Icon svg={PlusIcon} className="fill-green-base"/>
          <Icon svg={SpinnerIcon} animate className="fill-pink-base"/>
          <Icon svg={XIcon} className="fill-green-base"/>
        </div>

        <div className="flex gap-1">
          <Badge variant="primary">5</Badge>
          <Badge variant="secondary">2 de 5</Badge>
          <Badge variant="secondary" loading/>
        </div>

        <div className="flex gap-1">
          <Button variant="primary">Teste</Button>
          <Button icon={PlusIcon} >Nova Tarefa</Button>
          <Button icon={PlusIcon} handling >Criando</Button>
        </div>

        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} variant="primary"/>
          <ButtonIcon icon={CheckIcon} variant="secondary"/>
          <ButtonIcon icon={PencilIcon} variant="terciary"/>
          <ButtonIcon icon={PlusIcon} variant="secondary" loading/>
          <ButtonIcon icon={XIcon} variant="primary" loading/>
        </div>

        <div>
          <InputText></InputText>
        </div>

        <div>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox loading />
        </div>

        <div>
          <Card size="md">Olá Mundo</Card>
        </div>

        <div className="space-y-2">
          <Skeleton rounded="lg" className="h-6"/>
          <Skeleton className="w-96 h-6"/>
        </div>
      </div>
    </Container>

  )
}