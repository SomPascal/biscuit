import { describe, it, expect } from 'vitest';
import { Cookie } from '../src/Cookie';

describe('Cookie', () => {
  it('should convert to string properly', () => {
    const c = new Cookie('token', '123', { path: '/', secure: true });

    expect(c.toString()).toContain('token=123');

    expect(c.toString()).toContain('Path=/');
    
    expect(c.toString()).toContain('Secure');
  });
});
