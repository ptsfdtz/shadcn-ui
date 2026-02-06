import { ComponentPage } from '@/components/docs/component-page';
import { mdxComponents } from '@/components/docs/mdx-components';
import Docs from '@/docs/components/avatar.mdx';
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from '@/components/ui/avatar';
import { CheckIcon } from 'lucide-react';

export function AvatarPreview() {
  return (
    <ComponentPage title="Avatar" description="用户头像展示" docs={<Docs components={mdxComponents} />}>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=256&auto=format&fit=crop" alt="Olivia" />
            <AvatarFallback>OL</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=crop" alt="Evan" />
            <AvatarFallback>EV</AvatarFallback>
            <AvatarBadge>
              <CheckIcon />
            </AvatarBadge>
          </Avatar>
        </div>
        <AvatarGroup>
          <Avatar size="sm">
            <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=128&auto=format&fit=crop" alt="Mason" />
            <AvatarFallback>MA</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarImage src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=128&auto=format&fit=crop" alt="Jamie" />
            <AvatarFallback>JA</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarImage src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=128&auto=format&fit=crop" alt="Chris" />
            <AvatarFallback>CH</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+3</AvatarGroupCount>
        </AvatarGroup>
      </div>
    </ComponentPage>
  );
}
