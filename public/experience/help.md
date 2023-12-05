- Даты надо писать в американском стиле

```typescript
interface Experience {
  title: string
  company: string
  startDate: string
  endDate?: string // если нет, будет подставлено 'present' в зависимости от языка
  skills: string[]
  href: string
}
```
