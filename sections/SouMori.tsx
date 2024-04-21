import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Person {
  name: string;
  image?: ImageWidget;
}

export interface Props {
  person: Person;
  description: string;
  invertImage?: boolean;
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function BlogPosts({
  person,
  description,
  invertImage,
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-10">
      <div class="space-y-16 gap-5 flex flex-row justify-center">
        {invertImage ? <div class="flex justify-center">
          <p>{description}</p>
        </div> : <></>}
        <div class="flex flex-row gap-5 justify-center">
          <div class="border border-secondary rounded-lg overflow-hidden">
            <Image
              width={640}
              class="w-full object-fit z-10"
              sizes="(max-width: 320px) 50vw, 15vw"
              src={person.image}
              alt={person.image}
              decoding="async"
              loading="lazy"
            />
            <div class="p-6 space-y-4">
              <div class="font-semibold">{person.name}</div>
            </div>
          </div>
        </div>
        {
          !invertImage ? 
          <div class="flex justify-center">
            <p>{description}</p>
          </div> : <></>
        }
      </div>
    </div>
  );
}
