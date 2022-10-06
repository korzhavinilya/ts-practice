/**
 * Клиенты не должны зависеть от методов, которые они не используют.
 */
export function interfaceSegregationPrinciple() {}

interface CloudHostingProvider {}
interface CNDProvider {}
interface CloudStorageProvider {}

class Amazon
  implements CloudHostingProvider, CNDProvider, CloudStorageProvider {}

class Dropbox implements CloudStorageProvider {}
