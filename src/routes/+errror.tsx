import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { componentItems } from '@/lib/registry';

export function ErrrorPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6 py-10">
      <Card className="w-full max-w-lg text-center">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl">页面不存在</CardTitle>
          <CardDescription>你访问的地址不存在或已被移动。</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-3">
          <Button asChild>
            <Link to={componentItems[0].path}>返回组件列表</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/">回到首页</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
