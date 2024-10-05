# FSD pattern

## Folder structure

```text
├── src/
│   ├── app/            # NextJS app folder
│   ├── assets/            # Storing static assets
│   │   ├── icons/         # Storing icons files
│   ├── features/          # Grouping features of the application
│   │   └── ...            # Other feature folders
│   ├── shared/            # Shared elements used across multiple features
│   │   ├── cookies/       # Cookie helpers and names
│   │   ├── hooks/         # Custom hooks
│   │   ├── providers/     # Shared providers
│   │   ├── ui/            # Reusable components
│   ├── styles/            # Global styles
│   │   └── ...
│   ├── views          # Renamed FSD pages folder
│   │   └── ...
└── ...                # Other necessary files and folders
```

## Components structure

```text
features/footer/
├── ...                     # Additional components related to the Footer feature
├── footer.component.tsx    # View component
├── footer.model.ts         # Models and Types
├── footer.hook.ts          # Hooks
├── footer.module.scss      # Styles
├── footer.helper.ts        # Helpers functions
└── index.ts                # Export footer.component
```
